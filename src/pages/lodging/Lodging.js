import React from 'react'

import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import lodgingData from '../../data/lodgingData.json'
import Dropdown from '../../components/dropdown/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
    faStar,
} from '@fortawesome/free-solid-svg-icons'
import styles from './Lodging.module.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Lodging() {
    // State variables
    const [lodgingSelected, setLodgingSelected] = useState({
        id: '',
        title: '',
        pictures: [],
        description: '',
        host: { name: '', picture: '' },
        rating: '',
        location: '',
        equipments: [],
        tags: [],
    })

    // Destructure the lodgingSelected object
    const {
        title,
        pictures,
        description,
        host,
        rating,
        location,
        tags,
        equipments,
    } = lodgingSelected

    const [splitLocation, setSplitLocation] = useState([])

    const [splitName, setSplitName] = useState([])

    const [filledStar, setFilledStar] = useState([])

    const [imgIdx, setImgIdx] = useState(0)

    const [dataGot, setDataGot] = useState(false)

    // Get the parameter from the URL
    const params = useParams()

    // Navigation function
    const navigate = useNavigate()

    const lodgingId = params.id

    // Function to retrieve lodging data
    const getLodgingData = () => {
        const lodgingIdx = lodgingData.findIndex(
            (lodging) => lodging.id === lodgingId
        )

        // Navigate to an error page if lodging data is not found
        lodgingIdx < 0 && navigate('/error')

        return lodgingIdx
    }

    useEffect(() => {
        // Get the lodging data and update the state with it
        const idx = getLodgingData()
        setLodgingSelected(lodgingData[idx])
    }, [])

    // format the place and name data and the rate
    useEffect(() => {
        setSplitLocation(location.split(' - '))

        setSplitName(host.name.split(' '))

        const filledStarQty = parseInt(rating)

        const tmpfilledStar = Array.from(
            { length: 5 },
            (_, i) => filledStarQty > i
        )

        setFilledStar(tmpfilledStar)

        setDataGot(true)
    }, [lodgingSelected])

    const formattedLocation = splitLocation[1] + ', ' + splitLocation[0]

    const carouselLength = pictures.length

    // Function to handle the image carousel
    const handleClick = (dir) => {
        let newIdx = imgIdx
        newIdx += dir

        // go to the beginning or end of the carousel
        newIdx === carouselLength && (newIdx = 0)
        newIdx < 0 && (newIdx = carouselLength - 1)

        setImgIdx(newIdx)
    }

    return (
        <>
            <Header />
            {/* // Display lodging page when data are retrieved */}
            <main
                data-testid="lodging"
                className={dataGot ? styles.lodging : styles.waiting}
            >
                <div className={styles.slider}>
                    <img
                        src={pictures[imgIdx]}
                        alt={title}
                        className={styles.lodgingView}
                    />

                    {/* Display carousel arrrows and infos if more than 1 picture */}
                    {carouselLength > 1 && (
                        <>
                            <div className={styles.viewNavigation}>
                                <button onClick={() => handleClick(-1)}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <span>
                                    {imgIdx + 1} / {carouselLength}
                                </span>
                                <button onClick={() => handleClick(1)}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <div className={styles.infos}>
                    <div className={styles.infosWrapper}>
                        <div className="pres-wrapper">
                            <h1>{title}</h1>
                            <h2>{formattedLocation}</h2>
                        </div>
                        <div>
                            {tags.map((tag, idx) => {
                                return (
                                    <span key={idx} className={styles.tag}>
                                        {tag}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.infosWrapper}>
                        <div className={styles.host}>
                            <div className="name">
                                {splitName[0]}
                                <br />
                                {splitName[1]}
                            </div>
                            <img
                                src={host.picture}
                                alt={host.name}
                                className={styles.hostPicture}
                            />
                        </div>

                        <div className={styles.rate}>
                            {filledStar.map((star, idx) => {
                                return (
                                    <span
                                        key={idx}
                                        className={
                                            star
                                                ? styles.filledStar
                                                : styles.emptyStar
                                        }
                                    >
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.infos}>
                    <Dropdown
                        size="medium"
                        title="Description"
                        content={[description]}
                    />
                    <Dropdown
                        size="medium"
                        title="Equipements"
                        content={equipments}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}
