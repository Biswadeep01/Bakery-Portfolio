import { supabase } from './supabaseClient';
import { SUPABASE_CONFIG } from '@/data/cakeData';

/**
 * Merges static cake data with images from Supabase
 * @param {Array} staticCakes - Array of cake objects
 * @returns {Promise<Array>} - Array of cake objects with public image URLs
 */
export async function fetchCakeImages(staticCakes = []) {
  // Guard clause in case undefined/null is passed
  if (!Array.isArray(staticCakes) || staticCakes.length === 0) return [];

  const cakesWithImages = await Promise.all(
    staticCakes.map(async (cake) => {
        const folderPath = cake.folderId;
        
        try {
            // 1. Fetch files with limits to prevent massive memory usage
            const { data: files, error } = await supabase
                .storage
                .from(SUPABASE_CONFIG.bucket)
                .list(folderPath, {
                    limit: 15, // Cap images per product for efficiency
                    offset: 0,
                    sortBy: { column: 'name', order: 'asc' }, // Keep image order consistent
                });

            // 2. Explicitly handle Supabase API errors
            if (error) {
                console.error(`[Supabase Error] Failed fetching folder '${folderPath}':`, error.message);
                return { ...cake, images: ["/assets/about.png"] };
            }

            let imageUrls = [];

            if (files && files.length > 0) {
                // 3. Robust Filtering: Only allow valid image file extensions
                // This ignores .emptyFolderPlaceholder, .DS_Store, or sub-folders
                const validImages = files.filter(file => 
                    file.name && /\.(jpg|jpeg|png|webp|avif)$/i.test(file.name)
                );

                if (validImages.length > 0) {
                    // 4. Convert to Public URLs 
                    // (getPublicUrl is synchronous and fast, so doing it inside map is perfectly efficient)
                    imageUrls = validImages.map(file => {
                        const { data } = supabase
                            .storage
                            .from(SUPABASE_CONFIG.bucket)
                            .getPublicUrl(`${folderPath}/${file.name}`);
                        return data.publicUrl;
                    });
                } else {
                    imageUrls = ["/assets/about.png"]; // Folder exists, but no valid images
                }
            } else {
                imageUrls = ["/assets/about.png"]; // Folder is empty
            }

            // 5. Return the merged object
            return {
                ...cake,
                images: imageUrls
            };

        } catch (err) {
            // 6. Catch unexpected network/JS crashes to prevent the whole page from breaking
            console.error(`[Unexpected Error] Processing images for cake ${cake.id}:`, err);
            return {
                ...cake,
                images: ["/assets/about.png"]
            };
        }
    })
  );

  return cakesWithImages;
}