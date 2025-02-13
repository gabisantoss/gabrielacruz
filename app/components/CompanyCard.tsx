import Image from 'next/image'

import ArrowIcon from './icons/Arrow'
import { computeFromManifest } from 'next/dist/build/utils'

export default function CompanyCard({ company }) {
    return (
        <div>
            <div className="font-sans flex flex-row gap-4 cursor-default">
                <div className="flex font-sans flex-row items-center">
                    <a href={company.url
                    }>
                        <Image
                            className="bg-white aspect-square rounded-full mb-5 cursor-pointer align-middle m-1"
                            src={company.image}
                            alt={company.name}
                            width={46}
                            height={46}
                            unoptimized
                        />
                    </a>
                </div>
                <div className='flex flex-row justify-between w-full m-1'>
                    <div>
                        <div className='flex flex-row gap-2 items-center'>
                            <p className='text-md font-semibold'>{company.name}</p>
                            <div className='arrow transform rotate-270'>
                                <ArrowIcon />
                            </div>
                        </div>
                        <p className='text-xs'>{company.position}</p>
                    </div>
                    <div className='m-1'>
                        <p className='text-gray-500 font-medium text-sm'>{company.startDate} - {company.endDate}</p>
                    </div>
                </div>
            </div>
            <div className='text-sm ml-2 text-gray-800 text-justify'><p dangerouslySetInnerHTML={{ __html: company.description }} /></div>
        </div>
    )
}
