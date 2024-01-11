import React, { useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtistCard from '../../components/Artists/ArtistCard';
import { useNavigate } from 'react-router-dom';

const SearchResultList = () => {

  const navigate = useNavigate();
  const [data] = useState(navigate.state);

  return <>
     <section>
      <Container>
        <Row>
          {
            data.length === 0 ? (
            <h4 className='text-center'>No Artists Found </h4>
            ) : (
              data?.map(artist => (

           <Col lg='3' className='mb-4' key={artist._id}> 
           <ArtistCard artist={artist}/>
           </Col>
           ))
          )}
        </Row>

      </Container>
     </section>
  </>
   
  
}

export default SearchResultList