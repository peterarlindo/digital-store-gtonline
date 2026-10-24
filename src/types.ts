export interface Product {
  id?: string | number;
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
  category?: string;
  brand?: string;
  gender?: string;
  state?: string;
  description?: string;
  reference?: string;
  stars?: number;
  rating?: number;
}

export interface GalleryImage {
  src: string;
}

export interface FilterOption {
  text: string;
  value?: string;
}

export interface FilterGroupData {
  title: string;
  inputType: 'checkbox' | 'radio';
  options: FilterOption[];
}

export interface BuyBoxProps {
  name?: string;
  reference?: string;
  stars?: number;
  rating?: number;
  price?: number;
  priceDiscount?: number;
  description?: string;
  product?: Product;
  onBuy?: () => void;
  showBuyButton?: boolean;
children?: React.ReactNode;
}

export interface FilterGroupProps {
  title: string;
  inputType: 'checkbox' | 'radio';
  options: FilterOption[];
  selected?: string[];
  onChange?: (value: string) => void;
}

export interface FooterInformationInfo {
  text: string;
  link: string;
}

export interface FooterInformationGroupProps {
  title: string;
  informations: FooterInformationInfo[];
}

export interface GalleryProps {
  images: GalleryImage[];
  className?: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  showThumbs?: boolean;
}

export interface ProductCardProps {
  id?: string | number;
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
  category?: string;
}

export interface ProductListingProps {
  products: Product[];
}

export interface ProductOptionsProps {
  options: string[];
  type?: 'text' | 'color';
  shape?: 'square' | 'circle';
  radius?: string | number;
  selected?: string;
  onSelect?: (option: string) => void;
}

export interface SectionProps {
  title: string;
  titleAlign?: 'left' | 'center' | 'right';
  link?: {
    text: string;
    href: string;
  };
  children: React.ReactNode;
}