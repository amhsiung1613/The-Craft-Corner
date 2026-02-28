// Imports
import Link from 'next/link'
import PropTypes from 'prop-types'
import "../css/Breadcrumb.css"

// Breadcrumb component with default values
const BreadCrumb = ({ pages = [{ name: '', link: '' }] }) => {
// Going through a loop to construct the list item of the name and link from the array of objects passed in.
    let breadCrumbs = pages.map((page, index) => {
// If name and link is present in the data.
        if (page.link) return <li key={ index } className="breadcrumb-item">
            <Link href={ page.link }> { page.name }</Link></li>
// If just a name is present in the data.
        return <li key={ index } className="breadcrumb-item active" aria-current="page">{ page.name }</li>
    })

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/products">Products</Link></li>
                    { breadCrumbs }
                </ol>
            </nav>
        </>
    )
}

BreadCrumb.propTypes = { pages: PropTypes.arrayOf(PropTypes.object) }

export default BreadCrumb
