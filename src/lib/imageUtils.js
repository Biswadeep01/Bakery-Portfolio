import { supabase } from './supabaseClient';
import { SUPABASE_CONFIG } from '@/data/cakeData';

/**
 * @param {Array} staticCakes
 */
export async function fetchCakeImages(staticCakes) {
  const cakesWithImages = await Promise.all(
    staticCakes.map(async (cake) => {
        const folderPath = `${SUPABASE_CONFIG.basePath}/${cake.folderId}`;
        const { data: files, error } = await supabase
            .storage
            .from(SUPABASE_CONFIG.bucket)
            .list(folderPath);

        let imageUrls = [];

        if (files && files.length > 0) {
            // 3. Convert file names to Public URLs
            imageUrls = files
                .filter(file => file.name !== '.emptyFolderPlaceholder') // Filter junk
                .map(file => {
                    const { data } = supabase
                        .storage
                        .from(SUPABASE_CONFIG.bucket)
                        .getPublicUrl(`${folderPath}/${file.name}`);
                    return data.publicUrl;
                });
        } else {
            // Fallback if folder is empty or doesn't exist
            imageUrls = ["/assets/about.png"]; 
        }

        // 4. Return the merged object
        return {
            ...cake,
            images: imageUrls
        };
    })
  );

  return cakesWithImages;
}