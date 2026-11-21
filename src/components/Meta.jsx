import { useEffect } from 'react';

export default function Meta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | VALMERK Rubber Industries`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}
