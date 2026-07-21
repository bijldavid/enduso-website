export const projectDetails = [
    {
        id: 'thialf',
        title: 'Slimme systeemintegratie achter het ijs van Thialf',
        label: 'Thialf',
        bannerImage: '/images/thialf-project.jpg',
        alt: 'Thialf Project',
    },
    {
        id: 'golfbaan-spierdijk',
        title: 'Bij Golfbaan Spierdijk komt energie en buitenruimte samen',
        label: 'Golfbaan Spierdijk',
        bannerImage: '/images/golfbaanspierdijk-project.jpg',
        alt: 'Golfbaan Spierdijk Project',
    },
    {
        id: 'witflowerbulbs',
        title: 'Slimme energie voor de bloembollenteelt van Wit Flower Bulbs',
        label: 'Wit Flower Bulbs',
        bannerImage: '/images/witflowerbulbs-project.jpg',
        alt: 'Wit Flower Bulbs Project',
    },
    {
        id: 'blankendaal',
        title: 'Bij Blankendaal wordt energie slim afgestemd op de teelt',
        label: 'Blankendaal',
        bannerImage: '/images/blankendaal-project.jpg',
        alt: 'Blankendaal Project',
    },
    {
        id: 'bovegro',
        title: 'Betrouwbare energie achter het groenbeheer van Bovegro',
        label: 'Bovegro',
        bannerImage: '/images/bovegro-project.jpg',
        alt: 'Bovegro Project',
    },
    {
        id: 'hemrik',
        title: 'Op de Hemrik wordt netcapaciteit slim gedeeld tussen bedrijven',
        label: 'Hemrik',
        bannerImage: '/images/hemrik-project.jpg',
        alt: 'Hemrik Project',
    },
]

export function getProjectDetailBySlug(slug: string) {
    return projectDetails.find((project) => project.id === slug)
}