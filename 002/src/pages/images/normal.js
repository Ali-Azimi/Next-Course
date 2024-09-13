const HomeWithRegularImages = () => {
  const data = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div>
      <h1>Homepage with Regular HTML Images</h1>
      {data.map((imgSrc, index) => (
        <div key={index} style={{ margin: '50px 0' }}>
          <h2>Row {index + 1}</h2>
          <img
            src={imgSrc}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: 'auto' }}
          />
          <p>
            This is an example text block for row {index + 1}. Each row has an
            image and some text.
          </p>
        </div>

      ))}
    </div>
  );
};

export default HomeWithRegularImages;
