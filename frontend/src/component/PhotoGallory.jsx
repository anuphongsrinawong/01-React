import React, { useState } from 'react';
// import './css/PhotoGallory';

function GalleryApp() {
  // ข้อมูลรูปภาพ
  const images = [
    { id: 1, src: 'image1.jpg', category: 'nature' },
    { id: 2, src: 'image2.jpg', category: 'city' },
    { id: 3, src: 'image3.jpg', category: 'nature' },
    // เพิ่มรูปภาพเพิ่มเติม
  ];

  // สร้าง state สำหรับคำค้นหาและการกรอง
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // คอมโพเนนต์สำหรับแสดงรูปภาพ
  const Gallery = () => {
    // กรองรูปภาพตามคำค้นหาและหมวดหมู่
    const filteredImages = images.filter((image) => {
      const inCategory =
        categoryFilter === 'all' || image.category === categoryFilter;
      const matchesSearch = image.src
        .toLowerCase()
        .includes(search.toLowerCase());
      return inCategory && matchesSearch;
    });

    return (
      <div className="gallery">
        {filteredImages.map((image) => (
          <img key={image.id} src={image.src} alt={image.src} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* ช่องค้นหา */}
      <input
        type="text"
        placeholder="ค้นหารูปภาพ"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ฟิลเตอร์ตามหมวดหมู่ */}
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">ทั้งหมด</option>
        <option value="nature">ธรรมชาติ</option>
        <option value="city">เมือง</option>
        {/* เพิ่มหมวดหมู่เพิ่มเติม */}
      </select>

      {/* แสดงแกลลอรี่ */}
      <Gallery />
    </div>
  );
}

export default GalleryApp;
