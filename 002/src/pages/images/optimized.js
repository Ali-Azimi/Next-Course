// pages/index.js
import Image from 'next/image';

const HomeWithNextImages = () => {
  const data = [
    '/sample1.webp',
    '/sample2.webp',
    '/sample3.webp',
    '/sample4.webp',
    '/sample5.webp',
    '/sample6.webp',
    '/sample7.webp',
  ];

  return (
    <div>
      <h1>Homepage with Next.js Optimized Images</h1>

      <div>
        <h2>SAMPLE IMAGE</h2>
      </div>

      {data.map((imgSrc, index) => (
        <div key={index} style={{ margin: '50px 0' }}>
          <h2>Row {index + 1}</h2>
          <Image
            src={imgSrc}
            alt={`Image ${index + 1}`}
            width={800}
            height={400}
            layout="responsive"
            priority={index === 0 ? true : false}
            quality={index === 0 ? 50 : 100}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiYDAABXRUJQVlA4WAoAAAAgAAAAYQAAkgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggOAEAALAMAJ0BKmIAkwA+7WirTzo1pKIqGXyrQB2JZ27dW+Sc4Cv66EjM4YqqgkLrVtFXAcpX/TPIISMqVejU9GXHSWqOmTvPlFKhZB8/O9yiT/rDsYlYL2qC9//R6HjNkxh1rJ11vrO9pCnkvPAx3DQAAP7NhGXfmHH+Pf174paKxPwwPcJ28NTD3Bodko4tUu2ITZyZf30JMGIGqg8KEdvbcUNG4fbaD3CLEOPTkbXgIB+nzbFS3/3pPAOacCzOxfVCYtgR+fQszmWG8RbpUKsn7dvnbp+XGJwWT+QY2n0xMB6VwfC6sQg9cnUOzZYRwWiqfbpifxWxXIOpvkoL0bPm5BOm68GrU+XhBkBTQUoYDiLYpJk5r4TKHfc/eUEvltrS8By27zFPMYuoFId5dAlojSVQDIRAAAAAAA=="
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

export default HomeWithNextImages;
