const statusMsg = {
    "active": "✅ Currently active",
    "inactive": "👥 Looking for a new organizing team"
}

type Status = "active" | "inactive"

const citiesJson = [
    {
        continent: 'Europe',
        cities: [
            {
                name: 'Alicante',
                image: '/cities/alicante.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-alicante-3-edicion',
                status: 'active'
            },
            {
                name: 'Barcelona',
                image: '/cities/barcelona.webp',
                link: 'https://saturdays.ai/barcelona/',
                status: 'inactive'
            },
            {
                name: 'Córdoba',
                image: '/cities/cordoba.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-cordoba',
                status: 'inactive'
            },
            {
                name: 'Bilbao',
                image: '/cities/bilbao.webp',
                link: 'https://saturdays.ai/bilbao/',
                status: 'active'
            },
            {
                name: 'Madrid',
                image: '/cities/madrid.webp',
                link: 'https://saturdays.ai/madrid/',
                status: 'active'
            },
            {
                name: 'Murcia',
                image: '/cities/murcia.webp',
                link: 'https://saturdays.ai/murcia/',
                status: 'inactive'
            },
            {
                name: 'Mallorca',
                image: '/cities/mallorca.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-mallorca-2-edicion',
                status: 'inactive'
            },
            {
                name: 'Valencia',
                image: '/cities/valencia.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-valencia-2-edicion',
                status: 'active'
            },
            {
                name: 'Sevilla',
                image: '/cities/sevilla.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-sevilla-2-edicion',
                status: 'inactive'
            },
            {
                name: 'Castellón',
                image: '/cities/castellon.webp',
                link: 'https://saturdays.ai/castellon/',
                status: 'active'
            },
            {
                name: 'Zaragoza',
                image: '/cities/zaragoza.webp',
                link: 'https://saturdays.ai/zaragoza/',
                status: 'active'
            },
            {
                name: 'Tarragona',
                image: '/cities/tarragona.webp',
                link: 'https://saturdays.ai/tarragona/',
                status: 'inactive'
            },
            {
                name: 'Donostia',
                image: '/cities/donostia.webp',
                link: 'https://saturdays.ai/donostia/',
                status: 'active'
            },
            {
                name: 'Copenhagen',
                image: '/cities/copenhagen.webp',
                link: 'https://saturdays.ai/copenhagen/',
                status: 'active'
            },
            {
                name: 'Orea',
                image: '/cities/orea.webp',
                link: 'https://es.linkedin.com/in/mmarcosanchez',
                status: 'active'
            }
        ]
    },
    {
        continent: 'America',
        cities: [
            {
                name: 'La Paz',
                image: '/cities/la-paz.webp',
                link: 'https://saturdays.ai/la-paz/',
                status: 'active'
            },
            {
                name: 'Bogotá',
                image: '/cities/bogota.webp',
                link: 'https://saturdays.ai/create-your-own-ai-saturdays/',
                status: 'active'
            },
            {
                name: 'Caracas',
                image: '/cities/caracas.webp',
                link: 'https://saturdays.ai/create-your-own-ai-saturdays/',
                status: 'inactive'
            },
            {
                name: 'CDMX',
                image: '/cities/cdmx.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-cdmx',
                status: 'inactive'
            },
            {
                name: 'Costa Rica',
                image: '/cities/costa-rica.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-costarica-3-edicion',
                status: 'active'
            },
            {
                name: 'Guadalajara',
                image: '/cities/guadalajara.webp',
                link: 'https://saturdays.ai/guadalajara/',
                status: 'active'
            },
            {
                name: 'Tucson',
                image: '/cities/tucson.webp',
                link: 'https://saturdays.ai/create-your-own-ai-saturdays/',
                status: 'inactive'
            },
            {
                name: 'Guayaquil',
                image: '/cities/guayaquil.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-guayaquil-3-edicion',
                status: 'active'
            },
            {
                name: 'Hermosillo',
                image: '/cities/hermosillo.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-hermosillo-2-edicion',
                status: 'active'
            },
            {
                name: 'Lima',
                image: '/cities/lima.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-lima/en',
                status: 'inactive'
            },
            {
                name: 'Monterrey',
                image: '/cities/monterrey.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-monterrey-3-edicion',
                status: 'active'
            },
            {
                name: 'Mérida',
                image: '/cities/merida.webp',
                link: 'https://saturdays.ai/create-your-own-ai-saturdays/',
                status: 'inactive'
            },
            {
                name: 'Panamá',
                image: '/cities/panama.webp',
                link: 'https://m.facebook.com/SaturdaysAI-Panam%C3%A1-104652804939695/',
                status: 'active'
            },
            {
                name: 'Quito',
                image: '/cities/quito.webp',
                link: 'https://saturdays.ai/quito',
                status: 'active'
            },
            {
                name: 'Santiago de Chile',
                image: '/cities/santiago.webp',
                link: 'https://ti.to/saturdaysai/ai-saturdays-chile-2-edicion',
                status: 'active'
            },
            {
                name: 'Guatemala',
                image: '/cities/guatemala.webp',
                link: 'https://saturdays.ai/create-your-own-ai-saturdays/',
                status: 'inactive'
            }
        ]
    },
    {
        continent: 'Middle East & Africa',
        cities: [
            {
                name: 'Nairobi',
                image: '/cities/nairobi.webp',
                link: 'https://www.facebook.com/AISaturdaysNairobi/',
                status: 'active'
            },
            {
                name: 'Dubai',
                image: '/cities/dubai.webp',
                link: 'https://saturdays.ai/create-your-own-ai-saturdays/',
                status: 'inactive'
            }
        ]
    }
]

type City = {
    name: string,
    image: string,
    link: string,
    status: Status
}

export type { City }

export { statusMsg, citiesJson}