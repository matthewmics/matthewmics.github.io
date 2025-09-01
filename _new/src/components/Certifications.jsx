const certifications = [
    {
        title: 'UiPath Certified Advanced RPA Developer v1.0 (UiARD)',
        image: '/certs/uipath.jpg',
    },
    {
        title: 'Systems Plus College Foundation: Best Thesis',
        image: '/certs/thesis.jpg',
    },
    {
        title: 'SWEEPx: Game Development Using Unity3D',
        image: '/certs/psite-unity.jpg',
    },
    {
        title: 'Udemy: Complete guide to building an app with .Net Core and React',
        image: '/certs/udemy-netcore.jpg',
    },
    {
        title: 'Udemy: Angular and Laravel A Practical Guide with Docker',
        image: '/certs/udemy-angular.jpg',
    },
]

const Certifications = () => {
    return (
        <section id='certifications'>
            <div className='container max-w-5xl py-24 relative z-20'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    My <span className='text-primary'>Certifications</span>
                </h2>

                <p className='text-center mb-12 max-w-2xl mx-auto'>
                    A few of my professional certifications
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => window.open(cert.image, '_blank')}
                            className='bg-card/90 p-6 rounded-lg shadow-xs card-hover flex flex-col items-center cursor-pointer'
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className='w-full object-cover mb-4 rounded-2xl'
                            />
                            <h3 className='text-lg font-semibold mb-2'>{cert.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
