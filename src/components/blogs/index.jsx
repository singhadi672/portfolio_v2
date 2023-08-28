import ReactPaginate from "react-paginate";
import BlogSection from "./blogSection";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";


export default function Blogs() {
    let blogsData = [{
        blogHeading: 'Blog Heading 1',
        blogLink: "assa/as",
        blogContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem facilis sunt dolorum, consequatur mollitia necessitatibus aspernatur? Omnis ullam minus laboriosam mollitia recusandae culpa odit voluptate nesciunt fuga! Earum, nostrum."
    }, {
        blogHeading: 'Blog Heading 1',
        blogLink: "assa/as",
        blogContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem facilis sunt dolorum, consequatur mollitia necessitatibus aspernatur? Omnis ullam minus laboriosam mollitia recusandae culpa odit voluptate nesciunt fuga! Earum, nostrum."
    }, {
        blogHeading: 'Blog Heading 1',
        blogLink: "assa/as",
        blogContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem facilis sunt dolorum, consequatur mollitia necessitatibus aspernatur? Omnis ullam minus laboriosam mollitia recusandae culpa odit voluptate nesciunt fuga! Earum, nostrum."
    }, {
        blogHeading: 'Blog Heading 1',
        blogLink: "assa/as",
        blogContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem facilis sunt dolorum, consequatur mollitia necessitatibus aspernatur? Omnis ullam minus laboriosam mollitia recusandae culpa odit voluptate nesciunt fuga! Earum, nostrum."
    }, {
        blogHeading: 'Blog Heading 1',
        blogLink: "assa/as",
        blogContent: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quidem facilis sunt dolorum, consequatur mollitia necessitatibus aspernatur? Omnis ullam minus laboriosam mollitia recusandae culpa odit voluptate nesciunt fuga! Earum, nostrum."
    }]

    function PaginatedItems({ itemsPerPage }) {

        const [itemOffset, setItemOffset] = useState(0);


        const endOffset = itemOffset + itemsPerPage;

        const currentItems = blogsData.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(blogsData.length / itemsPerPage);


        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % blogsData.length;

            setItemOffset(newOffset);
        };

        return <>
            <div className="mt-12 grid grid-cols-2 gap-y-16 justify-center items-center place-items-center py-16 px-16 bg-hero_dark-100 w-[90%] h-[100%] rounded-3xl" >
                {currentItems?.map((blog, idx) =>
                    <BlogSection
                        blogLink={blog?.blogLink}
                        idx={idx}
                        blogHeading={blog?.blogHeading}
                        blogContent={blog?.blogContent}
                    />
                )
                }

            </div >
            <ReactPaginate
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                renderOnZeroPageCount={null}
                className="flex mt-3"
                pageClassName="mx-2"
                activeClassName="text-hero_highlight-dark"
            />
        </>
    }

    return (
        <div className="mt-28 flex justify-center items-center flex-col relative">
            <h2 className="font-semibold text-3xl">Blogs</h2>
            <BackgroundRadialDrop radial_class={"w-r8 h-r8 absolute -top-[40%] -right-[30%] animate_rotation_c"} />
            <>
                <PaginatedItems itemsPerPage={4} />
            </>
        </div>
    )
}
