import PageSEO from "../common/PageSEO";
import { seoContent } from "../common/seoContent";

export default function BlogMobile() {
    return(
        <div>
            <PageSEO {...seoContent.blog} />
        </div>
    );
}
