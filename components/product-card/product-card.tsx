import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { ProductItemListType } from 'types/product.type';
import { setProperty, PROPERTY_KEY } from '../../redux/slices/products.slice';
import { GET_PROJECTS } from '../../utils/get-query-key';
import formatUtil from 'utils/format.util';
import ImageWithFallback from '../common/image-with-fallback';
import commonConstants from 'constants/common.constant';

type ProductCardProps = ProductItemListType;

const ProductCard = ({
  photo_url,
  title,
  address,
  agent_name,
  property_type,
  launch_date,
  completion_date,
  min_price,
  max_price,
  id,
  startCursor = commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start,
}: ProductCardProps) => {
  const router = useRouter();
  // const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const handleLearnMore = () => {
    dispatch(setProperty({ type: PROPERTY_KEY.START, value: startCursor }));
    router.push('projects/' + id);
    // queryClient.removeQueries([GET_PROJECTS]);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <ImageWithFallback
            alt='product image'
            src={photo_url}
            // width={345}
            // height={140}
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Address: {address}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Agent name: {agent_name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Property Type: {property_type}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Launch Date: {formatUtil.formatDate({ date: launch_date })}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Completion Date: {formatUtil.formatDate({ date: completion_date })}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Price: {formatUtil.formatCurrency(min_price)} -{' '}
          {formatUtil.formatCurrency(max_price)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleLearnMore()} size='small'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
