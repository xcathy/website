import { Images } from '../constants/Images';
import { Specs } from '../constants/Specs';
import GridLayout from 'react-grid-layout';
import { Cat } from '../components/Cat';
import { BlogPost } from '../components/BlogPost';
import Scrollbar from 'react-scrollbars-custom';
import { useEffect, useState } from 'react';
import './blog.css';
import '../styles/global.css';
import '../styles/theme.css';

export default function Blog() {
  const screenW = Specs.screenWidth;
  const screenH = Specs.screenHeight;
  const mobileView = screenW < 600;
  const defaultStyle = { width: '100%', height: '100%' };
  const defaultSignature = 'Cathy\n2024';

  const defaultGardenTitle = 'Trip to the Butchart Gardens';

  const baseID = 'image';
  const cols = mobileView ? 1 : 6;
  const rowH = 300;

  // Image cards
  const images = [
    { id: `${ baseID }1`,
      src: Images.flower9,
      style: defaultStyle,
      title: defaultGardenTitle,
      content: 'Flower picture taken from the trip to the Butchart Gardens.\nIt looks like it belongs to a species of hydrangea.',
      signature: defaultSignature,
    },
    { id: `${ baseID }2`,
      src: Images.flower5,
      style: defaultStyle,
      title:  defaultGardenTitle,
      content: 'Flower picture taken from the trip to the Butchart Gardens.\nIt looks like it belongs to a species of amaranth.',
      signature: defaultSignature,
    },
    { id: `${ baseID }3`,
      src: Images.flower7,
      style: defaultStyle,
      title:  defaultGardenTitle,
      content: 'Flower picture taken from the trip to the Butchart Gardens.\nIt looks like it belongs to a species of astilbe.',
      signature: defaultSignature,
    },
    { id: `${ baseID }4`,
      src: Images.fountain,
      style: defaultStyle,
      title:  defaultGardenTitle,
      content:  'The picture of a fountain from the trip to the Butchart Gardens.\nThere is a sculpture of a frog standing on the edge of it.',
      signature: defaultSignature,
    },
    { id: `${ baseID }5`,
      src: Images.flower6,
      style: defaultStyle,
      title:  defaultGardenTitle,
      content: 'Flower pictures from the trip to the Butchart Gardens',
      signature: defaultSignature,
    },
    { id: `${ baseID }6`,
      src: Images.frog1,
      style: defaultStyle,
      title:  'Frogs from Vancouver Aquarium',
      content: 'Frog pictures from the trip to Vancouver Aquarium.',
      signature: defaultSignature,
    },
    { id: `${ baseID }7`,
      src: Images.seal,
      style: defaultStyle,
      title: 'Seal :)',
      content: 'Seal from Vancouver Aquarium, I love the smile!\n^U^',
      signature: defaultSignature,
    },
    { id: `${ baseID }8`,
      src: Images.jellyfish1,
      style: defaultStyle,
      title: 'Jellyfish',
      content: 'The jellyfish from Vancouver Aquarium.\nThey look like tiny stars floating in space.',
      signature: defaultSignature,
    },
    { id: `${ baseID }9`,
      src: Images.flower4,
      style: defaultStyle,
      title:  defaultGardenTitle,
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }10`,
      src: Images.fish1,
      style: defaultStyle,
      title: 'Fish from Vancouver Aquarium',
      content: 'Fish pictures from the trip to Vancouver Aquarium.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }11`,
      src: Images.fish2,
      style: defaultStyle,
      title: 'Fish from Vancouver Aquarium',
      content: 'Fish pictures from the trip to Vancouver Aquarium.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }12`,
      src: Images.fish3,
      style: defaultStyle,
      title: 'Fish from Vancouver Aquarium',
      content: 'Fish pictures from the trip to Vancouver Aquarium.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }13`,
      src: Images.flower2,
      style: defaultStyle,
      title: 'Flowers',
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }14`,
      src: Images.jellyfish2,
      style: defaultStyle,
      title: 'Jellyfish',
      content: 'The jellyfish from Vancouver Aquarium,\nswimming carelessly in circles.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }15`,
      src: Images.flower3,
      style: defaultStyle, 
      title: 'Flowers',
      content: 'Flower pictures from th e Butchart Gardens.',
      signature: defaultSignature,
    },

    {
      id: `${ baseID }16`,
      src: Images.frog2,
      style: defaultStyle, 
      title: 'Frogs from Vancouver Aquarium',
      content: 'Frog pictures from the trip to Vancouver Aquarium.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }17`,
      src: Images.flower10,
      style: defaultStyle,
      title: 'Flowers',
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }18`,
      src: Images.flower11,
      style: defaultStyle,
      title: 'Flowers',
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }19`,
      src: Images.flower13,
      style: defaultStyle,
      title: 'Flowers',
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }20`,
      src: Images.flower12,
      style: defaultStyle,
      title: 'Waterfall',
      content: 'This is a waterfall display in the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }21`,
      src: Images.flower14,
      style: defaultStyle,
      title: 'Flowers',
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }22`,
      src: Images.flower15,
      style: defaultStyle,
      title: 'Flowers',
      content: 'Flower pictures from the Butchart Gardens.',
      signature: defaultSignature,
    },
    {
      id: `${ baseID }23`,
      src: Images.flower16,
      style: defaultStyle,
      title: 'Plant Dog',
      content: 'The plant dog from a display window in the Butchart Gardens.\nI left my signature on the signature book near it :D',
      signature: defaultSignature,
    },
  ];

  // Generate a random layout for the images
  const generateRandomLayout = (length) => {
      var layoutArray = [];
      var i = 0;
      
      while (i < length) {
        const w = Math.floor(Math.random() * (cols/2)) + 1;
        const h = Math.floor(Math.random() * (screenH / rowH / 2)) + 1;
        var x = Math.floor(Math.random() * cols);
        var y = Math.floor(Math.random() * (screenH / rowH));

        layoutArray.push({ i: `image${i + 1}`, x: x, y: y, w: w, h: h });
        i++;
      }
      return layoutArray;
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem('imageLayout', JSON.stringify(newLayout));
  };

  useEffect(() => {
    const savedLayout = localStorage.getItem('imageLayout');
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  const [layout, setLayout] = useState(generateRandomLayout(images.length));

  return (
    <div className='main-container light-blue-background'>
      <div className='screen-overlay'>
        <div className='cat'>
          {
            Cat(
              'You can drag the blog posts to reorder and hover to see description!',
              { width: screenH/10, height: screenH/10 }
            )
          }
        </div>
      </div>
      <Scrollbar
        style={{ width: "100vw", height: "100vh" }} 
      >
        <div className='grid-page'>
          <GridLayout
            cols={ cols }
            rowHeight={ rowH }
            width={screenW}
            preventCollision={true}
            allowOverlap={ false }
            className='layout'
            layout={ layout }
            onLayoutChange={onLayoutChange}
            isResizable={ mobileView ? false : true }
            isDraggable={ mobileView ? false : true }
          >
            {images.map((image) => (
              BlogPost(
                image.id,
                image.src,
                image.style,
                image.title,
                image.content,
                image.signature
              )
            ))}
          </GridLayout>
        
          <div className='footer'>
            <p className='raleway-default default-grey'>you have reached the end</p>
          </div>
        </div>
        
      </Scrollbar>
    </div>
  );
}
