const CardMarker = ({ title, imageUrl }) => {
    return (
      <div style={{ position: 'relative', width: '200px', height: '200px' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#fff',
            boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
            borderRadius: '10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
          }}
        >
          <h3 style={{ margin: 0 }}>{title}</h3>
          <img src={imageUrl} style={{ maxWidth: '100%' }} alt={title} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderTop: '10px solid transparent',
            borderBottom: '10px solid #fff',
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
          }}
        ></div>
      </div>
    );
  };
  
export default CardMarker