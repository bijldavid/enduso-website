export const projectDetails = [
    {
        id: 'thialf',
        title: 'Slimme systeemintegratie achter het ijs van Thialf',
        label: 'Thialf',
        bannerImage: '/images/thialf-project.webp',
        alt: 'Thialf Project',
    },
    {
        id: 'golfbaan-spierdijk',
        title: 'Bij Golfbaan Spierdijk komt energie en buitenruimte samen',
        label: 'Golfbaan Spierdijk',
        bannerImage: '/images/golfbaanspierdijk-project.webp',
        alt: 'Golfbaan Spierdijk Project',
    },
    {
        id: 'witflowerbulbs',
        title: 'Slimme energie voor de bloembollenteelt van Wit Flower Bulbs',
        label: 'Wit Flower Bulbs',
        bannerImage: '/images/witflowerbulbs-project.webp',
        alt: 'Wit Flower Bulbs Project',
    },
    {
        id: 'blankendaal',
        title: 'Bij Blankendaal wordt energie slim afgestemd op de teelt',
        label: 'Blankendaal',
        bannerImage: '/images/blankendaal-project.webp',
        alt: 'Blankendaal Project',
    },
    {
        id: 'bovegro',
        title: 'Betrouwbare energie achter het groenbeheer van Bovegro',
        label: 'Bovegro',
        bannerImage: '/images/bovegro-project.webp',
        alt: 'Bovegro Project',
    },
    {
        id: 'hemrik',
        title: 'Op de Hemrik wordt netcapaciteit slim gedeeld tussen bedrijven',
        label: 'Hemrik',
        bannerImage: '/images/hemrik-project.webp',
        alt: 'Hemrik Project',
    },
]

export function getProjectDetailBySlug(slug: string) {
    return projectDetails.find((project) => project.id === slug)
}