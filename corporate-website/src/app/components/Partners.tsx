import Image from 'next/image'
import wilco from '../../../public/images/wilco.webp'
import bpiFrance from '../../../public/images/bpi-france.webp'
import cnrs from '../../../public/images/cnrs.webp'
import eckertAndZiegler from '../../../public/images/eckert-and-ziegler.webp'
import icm from '../../../public/images/icm.webp'
import inserm from '../../../public/images/inserm.webp'
import pantera from '../../../public/images/pantera.webp'
import reseauEntreprendre from '../../../public/images/reseau-entreprendre.webp'
import siric from '../../../public/images/siric.webp'
import universiteDeMontpellier from '../../../public/images/universite-de-montpellier.webp'


const partners = [
    { imgSrc: wilco, alt: "Wilco Logo" },
    { imgSrc: bpiFrance, alt: "Bpi France Logo" },
    { imgSrc: cnrs, alt: "CNRS Logo" },
    { imgSrc: eckertAndZiegler, alt: "Eckert & Ziegler Logo" },
    { imgSrc: icm, alt: "ICM Logo" },
    { imgSrc: inserm, alt: "INSERM Logo" },
    { imgSrc: pantera, alt: "Pantera Logo" },
    { imgSrc: reseauEntreprendre, alt: "Reseau Entreprendre Logo" },
    { imgSrc: siric, alt: "SIRIC Logo" },
    { imgSrc: universiteDeMontpellier, alt: "Universite de Montpellier Logo" },
]



export const Partners = () => {
    return (
        <div className="section  has-background-white">
            <h2 className="title has-text-centered">Our Partners</h2>
            <div className="columns is-mobile is-multiline is-centered">
                {
                    partners.map((p, i) => (
                        <div key={i} className="column is-narrow is-gapless">
                                <Image
                                    className=' has-transition'
                                    src={p.imgSrc}
                                    alt={p.alt}
                                    height={72}
                                    width={128}
                                />
                        </div>
                    ))
                }
            </div>
        </div>)
}