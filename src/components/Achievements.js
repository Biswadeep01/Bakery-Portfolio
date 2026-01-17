import ImageLoader from './ImageLoader';
export default function Achievements({title, image}) {
  return (
    <div className="col-md-4 col-lg-3 reveal">
      <div className="product-card h-100">
        {/* REPLACED STANDARD IMG WITH IMAGE LOADER */}
        <div style={{ height: '320px' }}>
            <ImageLoader src={image} alt={title} className="rounded-top w-100 h-100" />
        </div>
        <div className="card-body text-center">
          <h4 className="card-title" 
              style={{color: 'var(--primary-red)', marginBottom: '0'}}>{title}</h4>
        </div>
      </div>
    </div>
  );
}