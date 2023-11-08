import ReactPaginate from "react-paginate";
import BlogSection from "./blogSection";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import { useEffect } from "react";
import { blogs } from "../../apiServices/apiService";
import axios from "axios";


export default function Blogs({ blogsRef }) {


    const [blogsData, setBlogsData] = useState([])
    const [innerwidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleWindowResize() {
            setInnerWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    console.log(innerwidth)

    useEffect(() => {
        getBlogs();
    }, [])

    async function getBlogs() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + blogs())
            if (response?.data?.success) {
                setBlogsData(response?.data?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

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
            <div className="mt-12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 blogscroll gap-y-16 justify-center items-center place-items-center lg:py-16 lg:px-16 sm:px-10 sm:py-16 p-0 bg-hero_dark-100 w-[90%] h-[100%] rounded-3xl" >
                {currentItems?.map((blog, idx) =>
                    <BlogSection
                        blogLink={blog?.blog_link}
                        idx={idx}
                        blogHeading={blog?.blog_name}
                        blogContent={blog?.blog_description}
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
                className="flex lg:mt-3 mt-8"
                pageClassName="mx-2"
                activeClassName="text-hero_highlight-dark"
            />
        </>
    }

    return (
        <div className="lg:mt-28 mt-10 flex justify-center items-center flex-col relative" ref={blogsRef}>
            <h2 className="font-semibold lg:text-3xl text-4xl">Blogs</h2>
            <BackgroundRadialDrop radial_class={"lg:w-r8 lg:h-r8 absolute w-r5 h-r5 -top-[40%] -right-[30%] animate_rotation_c"} />
            <>
                <PaginatedItems itemsPerPage={innerwidth < 768 ? 1 : 4} />
            </>
        </div>
    )
}
