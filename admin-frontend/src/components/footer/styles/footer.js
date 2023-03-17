import styled from "styled-components/macro";

export const Footer = styled.footer`
 background: '#F7F7F7';
	padding: 70px 0;
	/* it is arranging bottom line  */
	position: relative;


	a {
		text-decoration:none
	}



}


`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
export const FooterCol = styled.div`
       width: 20%;
   padding: 0 12px;


    h4 {
        font-size: 12px;
	color: rgb(34,34,34);
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 600;
	position: relative;
    }

   
        
    h4:hover {
	color: #3498db;
}
ul li:not(:last-child){
	margin-bottom: 10px;
}

ul li a{
	font-size: 14px;
	text-transform: capitalize;
	color: rgb(34,34,34);
	text-decoration: none;
	font-weight: 400;
  text-align: 'left';

	display: block;
	transition: all 0.3s ease;


	

	
}

ul li a:hover{

color: #2ecc71;
padding-left: 8px;

}


.social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	font-size: 22px;

	margin:0 10px 5px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #7f8c8d;
	transition:  0.4s linear;
  position:relative;
}
.social-links a::before , .social-links a::after{
  content: ''; 
  position: absolute ; 
  box-sizing: border-box ; 
  width: 100%;
  height : 100% ;


  top : 0 ; 
  left :  0 ; 
  transition : .4s linear ; 



} 
.social-links a:hover{
  transform : scale(.8) ; 

} 
.social-links a:hover::before{
  border-left : 2px solid ; 
  border-right : 2px solid ; 
  transform : skewX(20deg) ; 
}

.social-links a:hover::after{
  border-top : 2px solid ; 
  border-bottom : 2px solid ; 
  transform : skewY(-20deg) ; 
}

         /*responsive for tablets*/
         @media(max-width: 767px){

    width: 50%;
    margin-bottom: 30px;

}
/* phones */
@media(max-width: 574px){
  
    width: 100%;



`;

export const FooterLogo = styled.div`
  a {
    font-size: 25px;
    color: #ffffff;
    text-transform: capitalize;
    display: inline-block;
    padding: 15px;
    margin-left: 20px;

    font-weight: 500;
  }
`;
export const FooterBottom = styled.div`
  margin: 0 auto;
  position: relative;
  top: 4em;

  p {
    color: #ffffff;
    position: relative;
  }

  p:hover {
    color: #f39c12;
  }
`;
export const Container = styled.div`
  max-width: 1170px;
  margin: auto;
`;
