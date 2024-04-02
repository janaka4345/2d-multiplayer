'use client'
import { Icon } from '@/components/icon'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function page() {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: 'rgba(255, 255, 255, 0)',
        },
        visible: {
            pathLength: 1,
            fill: 'rgba(255, 255, 255, 1)',
            transition: { duration: 10 },
        },
    }
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    useEffect(() => {
        console.log({ first, second, third })
    }, [])

    return (
        <div>
            <Icon ref={third} className="h-52 w-52" name="Frame 1" />
            <svg
                ref={first}
                width="176"
                height="171"
                viewBox="0 0 176 171"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="88" cy="85" r="83" fill="#FA954C" />
                <motion.path
                    d="M87.2614 97.2867C103.326 97.2867 117.042 99.8821 117.042 110.268C117.042 120.649 103.414 123.339 87.2614 123.339C71.1972 123.339 57.4806 120.744 57.4806 110.362C57.4806 99.9766 71.1092 97.2867 87.2614 97.2867ZM112.946 91.0329C119.087 90.9169 125.69 91.7763 128.13 92.3864C133.299 93.422 136.699 95.5361 138.107 98.6085C139.298 101.131 139.298 104.057 138.107 106.575C135.952 111.34 129.006 112.87 126.306 113.265C125.749 113.351 125.3 112.857 125.359 112.286C126.738 99.0811 115.767 92.8204 112.929 91.3809C112.808 91.3165 112.783 91.2176 112.795 91.1575C112.803 91.1145 112.854 91.0458 112.946 91.0329ZM62.0571 91.0346C62.1494 91.0475 62.1955 91.1162 62.2038 91.1549C62.2164 91.2194 62.1913 91.3139 62.0739 91.3826C59.2316 92.8221 48.2609 99.0828 49.6401 112.283C49.6988 112.859 49.2544 113.349 48.6969 113.267C45.9971 112.872 39.0508 111.342 36.8961 106.577C35.7013 104.054 35.7013 101.132 36.8961 98.6102C38.3046 95.5378 41.7002 93.4237 46.8691 92.3838C49.3131 91.778 55.9115 90.9186 62.0571 91.0346ZM87.2614 47C98.1986 47 106.968 55.9807 106.968 67.1958C106.968 78.4066 98.1986 87.3959 87.2614 87.3959C76.3241 87.3959 67.5542 78.4066 67.5542 67.1958C67.5542 55.9807 76.3241 47 87.2614 47ZM114.015 50.368C124.579 50.368 132.875 60.5561 130.05 71.9044C128.142 79.5445 121.238 84.6192 113.545 84.4129C112.774 84.3915 112.015 84.3184 111.282 84.1895C110.749 84.095 110.481 83.4805 110.783 83.025C113.717 78.5991 115.39 73.2752 115.39 67.5602C115.39 61.596 113.562 56.0357 110.389 51.4766C110.288 51.3348 110.213 51.1157 110.313 50.9524C110.397 50.8192 110.552 50.7504 110.699 50.716C111.768 50.4926 112.866 50.368 114.015 50.368ZM60.9818 50.3675C62.1305 50.3675 63.2288 50.4922 64.302 50.7156C64.4445 50.75 64.6038 50.823 64.6877 50.9519C64.7841 51.1152 64.7128 51.3344 64.6122 51.4762C61.4388 56.0353 59.611 61.5956 59.611 67.5598C59.611 73.2747 61.2837 78.5987 64.2182 83.0246C64.52 83.4801 64.2517 84.0945 63.7193 84.1891C62.9815 84.3223 62.2269 84.391 61.4556 84.4125C53.763 84.6188 46.8586 79.544 44.9512 71.904C42.1215 60.5557 50.4177 50.3675 60.9818 50.3675Z"
                    fill="black"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                />
            </svg>
            <br />

            <svg ref={second} width="100" height="100" className="">
                <symbol
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 176 171"
                    id="Frame 1"
                >
                    <circle cx="88" cy="85" r="83" fill="#FA954C"></circle>
                    <path
                        d="M87.2614 97.2867C103.326 97.2867 117.042 99.8821 117.042 110.268C117.042 120.649 103.414 123.339 87.2614 123.339C71.1972 123.339 57.4806 120.744 57.4806 110.362C57.4806 99.9766 71.1092 97.2867 87.2614 97.2867ZM112.946 91.0329C119.087 90.9169 125.69 91.7763 128.13 92.3864C133.299 93.422 136.699 95.5361 138.107 98.6085C139.298 101.131 139.298 104.057 138.107 106.575C135.952 111.34 129.006 112.87 126.306 113.265C125.749 113.351 125.3 112.857 125.359 112.286C126.738 99.0811 115.767 92.8204 112.929 91.3809C112.808 91.3165 112.783 91.2176 112.795 91.1575C112.803 91.1145 112.854 91.0458 112.946 91.0329ZM62.0571 91.0346C62.1494 91.0475 62.1955 91.1162 62.2038 91.1549C62.2164 91.2194 62.1913 91.3139 62.0739 91.3826C59.2316 92.8221 48.2609 99.0828 49.6401 112.283C49.6988 112.859 49.2544 113.349 48.6969 113.267C45.9971 112.872 39.0508 111.342 36.8961 106.577C35.7013 104.054 35.7013 101.132 36.8961 98.6102C38.3046 95.5378 41.7002 93.4237 46.8691 92.3838C49.3131 91.778 55.9115 90.9186 62.0571 91.0346ZM87.2614 47C98.1986 47 106.968 55.9807 106.968 67.1958C106.968 78.4066 98.1986 87.3959 87.2614 87.3959C76.3241 87.3959 67.5542 78.4066 67.5542 67.1958C67.5542 55.9807 76.3241 47 87.2614 47ZM114.015 50.368C124.579 50.368 132.875 60.5561 130.05 71.9044C128.142 79.5445 121.238 84.6192 113.545 84.4129C112.774 84.3915 112.015 84.3184 111.282 84.1895C110.749 84.095 110.481 83.4805 110.783 83.025C113.717 78.5991 115.39 73.2752 115.39 67.5602C115.39 61.596 113.562 56.0357 110.389 51.4766C110.288 51.3348 110.213 51.1157 110.313 50.9524C110.397 50.8192 110.552 50.7504 110.699 50.716C111.768 50.4926 112.866 50.368 114.015 50.368ZM60.9818 50.3675C62.1305 50.3675 63.2288 50.4922 64.302 50.7156C64.4445 50.75 64.6038 50.823 64.6877 50.9519C64.7841 51.1152 64.7128 51.3344 64.6122 51.4762C61.4388 56.0353 59.611 61.5956 59.611 67.5598C59.611 73.2747 61.2837 78.5987 64.2182 83.0246C64.52 83.4801 64.2517 84.0945 63.7193 84.1891C62.9815 84.3223 62.2269 84.391 61.4556 84.4125C53.763 84.6188 46.8586 79.544 44.9512 71.904C42.1215 60.5557 50.4177 50.3675 60.9818 50.3675Z"
                        fill="black"
                    ></path>
                </symbol>
            </svg>
            <svg className="">
                <use xlinkHref="#Frame 1"></use>
            </svg>
        </div>
    )
}