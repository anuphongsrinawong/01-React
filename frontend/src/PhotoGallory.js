import React, { useState } from 'react';
import './PhotoGallory.css';

function GalleryApp() {
    // ข้อมูลรูปภาพ
    const images = [
        { id: 1, src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_640.jpg', category: 'nature' },
        { id: 2, src: 'https://media.istockphoto.com/id/1384896175/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9F%E0%B8%B5%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%8B%E0%B9%8C-%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B8%B4%E0%B9%82%E0%B8%8B%E0%B8%99%E0%B8%B2-%E0%B8%AA%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2-downtown-skyline-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8.webp?b=1&s=612x612&w=0&k=20&c=GNDnww_QaudedxKEGAkIQXfMU_Ka_PP1Nmybe7W-SE8=', category: 'city' },
        { id: 3, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg', category: 'nature' },
        { id: 4, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg', category: 'nature' },
        { id: 5, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg', category: 'nature' },
        { id: 6, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg', category: 'nature' },
        { id: 7, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg', category: 'nature' },
        { id: 8, src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg', category: 'nature' },
        // เพิ่มรูปภาพเพิ่มเติม
    ];

    // สร้าง state สำหรับคำค้นหาและการกรอง
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    // คอมโพเนนต์สำหรับแสดงรูปภาพ
    const Gallery = () => {
        // กรองรูปภาพตามคำค้นหาและหมวดหมู่
        const filteredImages = images.filter((image) => {
            const inCategory = categoryFilter === 'all' || image.category === categoryFilter;
            const matchesSearch = image.src.toLowerCase().includes(search.toLowerCase());
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
            <div className="input">
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
            </div>

            {/* แสดงแกลลอรี่ */}
            <div className='Gallory-list'>
                <Gallery />
            </div>




        </div>
    );
}

export default GalleryApp;
