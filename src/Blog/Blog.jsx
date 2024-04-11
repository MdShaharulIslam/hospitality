
import { Helmet } from 'react-helmet';
import Navber from '../Component/Navber/Navber';

const Blog = () => {
    return (
        <div>
            <Navber></Navber>
              <Helmet><title>Blogs</title></Helmet>
        </div>
    );
};

export default Blog;
