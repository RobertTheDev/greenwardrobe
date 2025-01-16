export function generateMetaTitle(
  pageName?: string,
  companyName = 'Green Wardrobe',
) {
  if (!pageName) {
    return 'Green Wardrobe: Sustainable Clothing for Everyone';
  }

  return `${pageName} | ${companyName}`;
}

export function generateMetaDescription() {
  return 'Green Wardrobe is a sustainable clothing brand that offers eco-friendly clothing for everyone. This project is part of a portfolio for Robert Hawker.';
}
