import Link from "next/link";

type MaquinasPaginationProps = {
    page: number
    totalPages: number
}

export default function MaquinasPagination({ page, totalPages }: MaquinasPaginationProps) {
    const pages = Array.from({length: totalPages}, (_, i) => i+ 1 )


    return (
        <nav className='flex justify-center py-10'>

            {page > 1 && (
                <Link
                    href={`/admin/maquinas?page=${page - 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >&laquo;</Link>
            )}

            {pages.map(currentPage => (
                <Link
                    key={currentPage}
                    href={`/admin/maquinas?page=${currentPage}`}
                    className={`${page === currentPage && 'font-black'}  bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >{currentPage}</Link>
            ))}

            {page < totalPages && (
                <Link
                    href={`/admin/maquinas?page=${page + 1}`}
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >&raquo;</Link>
            )}

        </nav>
    )
}
