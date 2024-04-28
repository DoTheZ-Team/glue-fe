'use client';

import { useState, useEffect } from 'react';

const FileSrc = (
  getDefaultFile: string,
  fileName: string,
  fileType: string,
) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (getDefaultFile) {
      fetch(getDefaultFile)
        .then((res) => res.blob())
        .then((blob) => {
          const defaultFile = new File([blob], fileName, { type: fileType });
          setFile(defaultFile);
        })
        .catch((error) => {
          console.error(`Error fetching ${fileName} image:`, error);
        });
    }
  }, [getDefaultFile, fileName, fileType]);

  return [file, setFile] as const;
};

export default FileSrc;
