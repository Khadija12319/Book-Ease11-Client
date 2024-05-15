import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import { useEffect } from 'react';
import "../../../App.css";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const Gellary = () => {
    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
          itemSelector: '.gallery__item',
          rowHeight: 180,
          lastRow: 'start',
          gutter: 2,
          rowHeightTolerance: 0.1,
          calculateItemsHeight: false,
        });
      }, []);
    return (
        <div className='container mx-auto w-full'>
            <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={'nature'}
        autoplayFirstVideo={false}
        elementClassNames={'gallery'}
        mobileSettings={{
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false,
        }}
        className="w-full"
      >
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it2"
          data-tweet-text="lightGallery slide  2"
          className="gallery__item"
          data-src="https://i.ibb.co/QCtwbwQ/pexels-pixabay-261181.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/QCtwbwQ/pexels-pixabay-261181.jpg' >X </a></h4><p> Location - <a href='https://i.ibb.co/QCtwbwQ/pexels-pixabay-261181.jpg'>Radiant Horizon Retreat</a>This is the Way</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/QCtwbwQ/pexels-pixabay-261181.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/d2y7zSn/pexels-kelly-1179532-2869215.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/d2y7zSn/pexels-kelly-1179532-2869215.jpg' >Sascha Bosshard </a></h4><p> Location - <a href='https://i.ibb.co/d2y7zSn/pexels-kelly-1179532-2869215.jpgz'>Radiant Horizon Retreat</a></p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/d2y7zSn/pexels-kelly-1179532-2869215.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2398"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/K2Q4QS1/pexels-pixabay-53577.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/K2Q4QS1/pexels-pixabay-53577.jpg' >Radiant Horizon Retreat</a></h4><p> Foggy Road</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/K2Q4QS1/pexels-pixabay-53577.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/6m3zkrw/pexels-zizome-453201.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/6m3zkrw/pexels-zizome-453201.jpg' >Radiant Horizon Retreat</a></h4><p>  Misty shroud over a forest</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/6m3zkrw/pexels-zizome-453201.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/GpLpJQs/pexels-pixabay-261169.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/GpLpJQs/pexels-pixabay-261169.jpg' >Radiant Horizon Retreat</a></h4><p>Location - <a href=''>Bled, Slovenia'>Bled, Slovenia</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/GpLpJQs/pexels-pixabay-261169.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1126"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/YkQ5yn8/pexels-valeriya-827528.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/YkQ5yn8/pexels-valeriya-827528.jpg' >Radiant Horizon Retreat</a></h4><p>Location - <a href='Bled, Slovenia'>Bled, Slovenia</a> Wooded lake island </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/YkQ5yn8/pexels-valeriya-827528.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1063"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/S39XPBh/pexels-julieaagaard-2096983.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/S39XPBh/pexels-julieaagaard-2096983.jpg' >David Marcu</a></h4><p>Location - <a href='https://i.ibb.co/S39XPBh/pexels-julieaagaard-2096983.jpg'>Radiant Horizon Retreat</a> Alone in the unspoilt wilderness </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/S39XPBh/pexels-julieaagaard-2096983.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/p0G6BXv/pexels-thorsten-technoman-109353-338504.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/p0G6BXv/pexels-thorsten-technoman-109353-338504.jpg' >whoisbenjamin</a></h4>
          <p>Location - <a href='https://i.ibb.co/p0G6BXv/pexels-thorsten-technoman-109353-338504.jpg'>Radiant Horizon Retreat</a> 
          A swan on a calm misty lake in the mountains of Snowdonia, North Wales. <a href='https://i.ibb.co/p0G6BXv/pexels-thorsten-technoman-109353-338504.jpg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/p0G6BXv/pexels-thorsten-technoman-109353-338504.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1144"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/jW0yMHB/pexels-pixabay-53464.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/jW0yMHB/pexels-pixabay-53464.jpg' >Aaron Burden</a></h4><p>Location - <a href='https://i.ibb.co/jW0yMHB/pexels-pixabay-53464.jpg'>Radiant Horizon Retreat</a> Colorful trees near a lake. <a href='https://i.ibb.co/jW0yMHB/pexels-pixabay-53464.jpg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/jW0yMHB/pexels-pixabay-53464.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/wQfCQyQ/pexels-vince-2363807.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/wQfCQyQ/pexels-vince-2363807.jpg' >Kalen Emsley</a></h4><p>Location - <a href='https://i.ibb.co/wQfCQyQ/pexels-vince-2363807.jpg'>Radiant Horizon Retreat</a> No captions. <a href='https://i.ibb.co/wQfCQyQ/pexels-vince-2363807.jpg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/wQfCQyQ/pexels-vince-2363807.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/QPxGrJf/pexels-manuel-barros-1263073-2403017.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/QPxGrJf/pexels-manuel-barros-1263073-2403017.jpg' >Kace Rodriguez</a></h4><p>Location - <a href='https://i.ibb.co/QPxGrJf/pexels-manuel-barros-1263073-2403017.jpg'>Radiant Horizon Retreat</a> Pfeiffer Beach at Dusk. <a href='https://i.ibb.co/QPxGrJf/pexels-manuel-barros-1263073-2403017.jpg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/QPxGrJf/pexels-manuel-barros-1263073-2403017.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/HXG9T6G/pexels-cottonbro-5371484.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/HXG9T6G/pexels-cottonbro-5371484.jpg' >Pat Whelen</a></h4><p>Location - <a href='https://i.ibb.co/HXG9T6G/pexels-cottonbro-5371484.jpg'>Radiant Horizon Retreat</a> No caption <a href='https://i.ibb.co/HXG9T6G/pexels-cottonbro-5371484.jpg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/HXG9T6G/pexels-cottonbro-5371484.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/S7QcWtR/pexels-enginakyurt-2952663.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/S7QcWtR/pexels-enginakyurt-2952663.jpg' >Derek Thomson</a></h4><p>Location - <a href='https://i.ibb.co/S7QcWtR/pexels-enginakyurt-2952663.jpg'>Radiant Horizon Retreat</a> No caption <a href='https://i.ibb.co/S7QcWtR/pexels-enginakyurt-2952663.jpg'>Link</a> </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/S7QcWtR/pexels-enginakyurt-2952663.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/SntGdX8/pexels-rachel-claire-6127330.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/SntGdX8/pexels-rachel-claire-6127330.jpg' >Michal Janek</a></h4><p>Location - <a href='https://i.ibb.co/SntGdX8/pexels-rachel-claire-6127330.jpg'>Radiant Horizon Retreat</a> Coast  </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/SntGdX8/pexels-rachel-claire-6127330.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2400"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/8bwT6Nm/pexels-chanwalrus-941861.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/8bwT6Nm/pexels-chanwalrus-941861.jpg' >Iris Papillon</a></h4><p>Location - <a href='https://i.ibb.co/8bwT6Nm/pexels-chanwalrus-941861.jpg'>Radiant Horizon Retreat</a> Big Sur drive  </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/8bwT6Nm/pexels-chanwalrus-941861.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1065"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/Z1ThtNb/pexels-jonathanborba-2878785.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/Z1ThtNb/pexels-jonathanborba-2878785.jpg' >Radiant Horizon Retreat</a></h4><p>Published on August 2, 2020</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/Z1ThtNb/pexels-jonathanborba-2878785.jpg"
          />
        </a>
        <a
          data-lg-size="1600-2134"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/3d4JqW7/pexels-julieaagaard-2351290.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/3d4JqW7/pexels-julieaagaard-2351290.jpg' >fynn</a></h4><p>Location - <a href='https://i.ibb.co/3d4JqW7/pexels-julieaagaard-2351290.jpg'>Radiant Horizon Retreat</a> Wasserauen, Appenzell Innerrhoden, Schweiz  </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/3d4JqW7/pexels-julieaagaard-2351290.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1060"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/ZcxjK0m/pexels-quark-studio-1159039-2507010.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/ZcxjK0m/pexels-quark-studio-1159039-2507010.jpg' >Daniel Leone</a></h4><p>Location - <a href='https://i.ibb.co/ZcxjK0m/pexels-quark-studio-1159039-2507010.jpg'>Radiant Horizon Retreat</a> Taken from the top of Poon Hill before sun rise </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/ZcxjK0m/pexels-quark-studio-1159039-2507010.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1037"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/gvvsxqk/pexels-osho-1001965.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/gvvsxqk/pexels-osho-1001965.jpg' >Boba Jovanovic</a></h4><p>Location - <a href='https://i.ibb.co/gvvsxqk/pexels-osho-1001965.jpg'>Radiant Horizon Retreat</a> Boka kotorska bay </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/gvvsxqk/pexels-osho-1001965.jpg"
          />
        </a>
        <a
          data-lg-size="1600-899"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/8ggFc9V/pexels-hakimsatoso-3634741.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/8ggFc9V/pexels-hakimsatoso-3634741.jpg' >Surendra Vikram Singh</a></h4><p>Location - <a href='https://i.ibb.co/8ggFc9V/pexels-hakimsatoso-3634741.jpg'>Radiant Horizon Retreat</a> Cloud covered mountain </p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/8ggFc9V/pexels-hakimsatoso-3634741.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/CndYXj8/pexels-pixabay-277572.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/CndYXj8/pexels-pixabay-277572.jpg' >Cam Adams</a></h4><p>Location - <a href='https://i.ibb.co/CndYXj8/pexels-pixabay-277572.jpg'>Radiant Horizon Retreat</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/CndYXj8/pexels-pixabay-277572.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg' >Cam Adams</a></h4><p>Location - <a href='https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg'>Radiant Horizon Retreat</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg' >Cam Adams</a></h4><p>Location - <a href='https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg'>Radiant Horizon Retreat</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/L1wQ0Bz/pexels-lamiko-3754595.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/3cJ0hmC/pexels-enginakyurt-2684260.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/3cJ0hmC/pexels-enginakyurt-2684260.jpg' >Cam Adams</a></h4><p>Location - <a href='https://i.ibb.co/3cJ0hmC/pexels-enginakyurt-2684260.jpg'>Radiant Horizon Retreat</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/3cJ0hmC/pexels-enginakyurt-2684260.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/SRMcJhc/pexels-lukas-rychvalsky-2889618.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/SRMcJhc/pexels-lukas-rychvalsky-2889618.jpg' >Cam Adams</a></h4><p>Location - <a href='https://i.ibb.co/SRMcJhc/pexels-lukas-rychvalsky-2889618.jpg'>Radiant Horizon Retreat</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/SRMcJhc/pexels-lukas-rychvalsky-2889618.jpg"
          />
        </a>
        <a
          data-lg-size="1600-1067"
          data-pinterest-text="Pin it3"
          data-tweet-text="lightGallery slide  4"
          className="gallery__item"
          data-src="https://i.ibb.co/Pm1RbdV/pexels-rpnickson-2417842.jpg"
          data-sub-html="<h4>Photo by - <a href='https://i.ibb.co/Pm1RbdV/pexels-rpnickson-2417842.jpg' >Cam Adams</a></h4><p>Location - <a href='https://i.ibb.co/Pm1RbdV/pexels-rpnickson-2417842.jpg'>Radiant Horizon Retreat</a> Lake along jagged mountains</p>"
        >
          <img
            className="img-responsive"
            src="https://i.ibb.co/Pm1RbdV/pexels-rpnickson-2417842.jpg"
          />
        </a>
      </LightGallery>
        </div>
    );
};

export default Gellary;