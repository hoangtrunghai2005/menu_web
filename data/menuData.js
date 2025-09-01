export const categories = [
  { id: 'all', name: 'Tất cả' },
  { id: 'appetizers', name: 'Khai vị' },
  { id: 'soups', name: 'Súp' },
  { id: 'main-courses', name: 'Món chính' },
  { id: 'noodles', name: 'Mì & Phở' },
  { id: 'desserts', name: 'Tráng miệng' },
  { id: 'drinks', name: 'Đồ uống' },
];

export const menuItems = [
  // Khai vị
  {
    id: 1,
    name: 'Gỏi Cuốn Tôm Thịt',
    description: 'Bánh tráng cuốn tôm, thịt luộc, rau sống, bún, chấm nước mắm pha',
    price: '45.000đ',
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Chả Giò',
    description: 'Chả giò truyền thống với nhân thịt heo, nấm mèo, cà rốt',
    price: '35.000đ',
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop',
  },
  
  // Súp
  {
    id: 3,
    name: 'Súp Cua',
    description: 'Súp cua đặc biệt với trứng cua, nấm, rau ngò',
    price: '55.000đ',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Canh Chua Cá Lóc',
    description: 'Canh chua truyền thống với cá lóc, dứa, đậu bắp, cà chua',
    price: '65.000đ',
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
  },
  
  // Món chính
  {
    id: 5,
    name: 'Cơm Tấm Sườn Nướng',
    description: 'Cơm tấm với sườn nướng, chả trứng, bì, chả',
    price: '75.000đ',
    category: 'main-courses',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Bún Chả Hà Nội',
    description: 'Bún chả truyền thống với thịt nướng, chả viên, rau sống',
    price: '65.000đ',
    category: 'main-courses',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop',
  },
  {
    id: 7,
    name: 'Phở Bò',
    description: 'Phở bò Nam với nước dùng đậm đà, bò tái, bánh phở',
    price: '70.000đ',
    category: 'main-courses',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop',
  },
  
  // Mì & Phở
  {
    id: 8,
    name: 'Bún Bò Huế',
    description: 'Bún bò Huế cay nồng với nước dùng đặc trưng, bò, giò heo',
    price: '80.000đ',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop',
  },
  {
    id: 9,
    name: 'Mì Xào Hải Sản',
    description: 'Mì xào với tôm, mực, cua, rau cải, nước sốt đặc biệt',
    price: '85.000đ',
    category: 'noodles',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
  },
  
  // Tráng miệng
  {
    id: 10,
    name: 'Chè Ba Màu',
    description: 'Chè ba màu truyền thống với đậu xanh, đậu đỏ, bột báng',
    price: '25.000đ',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop',
  },
  {
    id: 11,
    name: 'Bánh Flan',
    description: 'Bánh flan mềm mịn với caramel ngọt ngào',
    price: '30.000đ',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=400&fit=crop',
  },
  
  // Đồ uống
  {
    id: 12,
    name: 'Nước Mía',
    description: 'Nước mía tươi mát, giải nhiệt',
    price: '20.000đ',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop',
  },
  {
    id: 13,
    name: 'Cà Phê Sữa Đá',
    description: 'Cà phê sữa đá truyền thống Việt Nam',
    price: '25.000đ',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
  },
  {
    id: 14,
    name: 'Trà Đá',
    description: 'Trà đá mát lạnh, thanh nhiệt',
    price: '15.000đ',
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=400&fit=crop',
  },
];
