// Asset imports
import blog_1 from "@/public/images/blog/blog_1.jpeg";
import blog_2 from "@/public/images/blog/blog_2.jpeg";
import blog_3 from "@/public/images/blog/blog_3.jpeg";

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import BlogItem from "@/components/BlogItem/BlogItem";

export default function Blog() {
    return (
        <div className="
        Blog
        flex-col
        py-20
        ">
          <SectionHeader 
          preheading="News From Blog" 
          heading="What's On Our Mind"
          />
  
          <div className="
          flex-row
          justify-evenly
          flex-wrap
          ">
  
            <BlogItem 
            image={blog_1}
            date="Mar 20"
            category="Beard Styles"
            author="Admin"
            title="The Best Barbershop In The Town"
            description="
            Amet minim mollit non deserunt ullamco 
            est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit 
            mollit. 
            "
            />
  
            <BlogItem 
            image={blog_2}
            date="Apr 25"
            category="Beard Styles"
            author="Admin"
            title="The Best Barbershop In The Town"
            description="
            Amet minim mollit non deserunt ullamco 
            est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit 
            mollit. 
            "
            />
  
            <BlogItem 
            image={blog_3}
            date="Jun 12"
            category="Beard Styles"
            author="Admin"
            title="The Best Barbershop In The Town"
            description="
            Amet minim mollit non deserunt ullamco 
            est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit 
            mollit. 
            "
            />
  
          </div>
        </div>
    );
}