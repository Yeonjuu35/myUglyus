import React, { useEffect } from 'react';
import usdata from '../../data/data.json';

const { kakao } = window;

function Kakaomap({ setTargetNum }) {
    useEffect(() => {
        const container = document.getElementById('kakaomap');
        const options = {
            center: new kakao.maps.LatLng(36.5174, 127.8173),
            level: 12
        };

        const map = new kakao.maps.Map(container, options);
        const imageSrc = `./img/map/mapmarker.svg`,
              imageSize = new kakao.maps.Size(43, 48),
              imageOption = { offset: new kakao.maps.Point(21.5, 24) };

        usdata.map.mapinfo.forEach((location, index) => {
            const [lat, lng] = location.location.split('|').map(Number);
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(lat, lng),
                title: location.title,
                image: markerImage
            });

            kakao.maps.event.addListener(marker, 'click', () => {
                setTargetNum(index);
            });
        });
    }, [setTargetNum]);

    return (
        <div id="kakaomap" className="w-100 h-100 position-absolute radiusCustom overflow-hidden"></div>
    );
}

export default Kakaomap;
