import APP_IMG from '../../../assets/images';

import DraftBox from '../components/DraftBox';

const imgMap = Object.entries(APP_IMG).map((item) => ({
  tag: 'APP_IMG.' + item[0],
  demo: item[1],
}));

const DraftImage = () => {
  return (
    <div className='draft-page draft-icon'>
      <h2>App Image</h2>
      <div className='draft-box__wrapper'>
        {imgMap.map((i, x) => (
          <DraftBox
            isTag={false}
            key={x}
            demo={
              <img
                src={i.demo}
                width='150'
                height='150'
                alt='demo'
              />
            }
            tag={i.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default DraftImage;
