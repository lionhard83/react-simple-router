import React, { FC, useState } from 'react';
import './Card.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Character } from '../../pages/Characters';
import { useNavigate } from 'react-router-dom';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';


const pippo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVy5_wER4Z0J7kyJh9tiPqfECNR6nJmrGfHQ&usqp=CAU';
const pluto = 'https://it.wikifur.com/w/images/thumb/a/a2/Plutodoge.jpg/401px-Plutodoge.jpg';
const paperino = 'https://www.cinefacts.it/foto/h!Paperino_donald_duck_disney__1_.png'
    

const images = [pippo, pluto, paperino];

type CardProps = {
    character: Character, 
    index: number, 
    isSelected: boolean,
    selected?: (character: string) => void
};

// const Card: FC<CardProps> = (props: CardProps) => {
    
//     const {character, index, selected, isSelected} = props;
    
//    return (
//     <div 
//         style={{backgroundColor: isSelected ? 'green' : 'red'}} 
//         className='card' 
//         onClick={() => selected && selected(character)}
//     >
//         <img alt='pippo' src={images[index]} />
//         <p className='yellow-bg'>{character} 
//         {isSelected ? ' isSelected' : ' notSelected'}</p>
//     </div>)
// }


// export default Card;


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard: FC<CardProps> = (props) => {
    const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const {character, index, selected, isSelected} = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={character.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" onClick={() => {
            navigate(String(character.id))}
        }>
          {character.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}


export { RecipeReviewCard }