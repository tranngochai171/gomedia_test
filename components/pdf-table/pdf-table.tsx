import {
  Paper,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
} from '@mui/material';
import PictureAsPdfIconOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import { ProductItemListType } from 'types/product.type';
import formatUtil from 'utils/format.util';

type PDFTableProps = Pick<ProductItemListType, 'pdfs'>;

const PDFTable = ({ pdfs }: PDFTableProps) => {
  return (
    <Paper sx={{ width: '100%', mt: 2, p: 2 }} elevation={1}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: 48,
        }}
      >
        <Typography
          variant='subtitle1'
          component='h3'
          style={{ fontWeight: 'bold' }}
        >
          PDF Files
        </Typography>
      </Box>
      {pdfs?.length > 0 ? (
        <TableContainer component={Paper} sx={{ mb: 2 }} elevation={0}>
          <Table aria-label='simple table' size='small'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Title</TableCell>
                <TableCell align='left'>Date Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pdfs?.map(({ url, title, create_at }, index: number) => (
                <TableRow
                  key={`${title}_${index}`}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  <TableCell align='left'>
                    <Button href={url} target='_blank'>
                      <Stack direction='row' alignItems='center' gap={2}>
                        <PictureAsPdfIconOutlined /> &nbsp; {title}
                      </Stack>
                    </Button>
                  </TableCell>
                  <TableCell align='left'>
                    {formatUtil.formatDate({ date: create_at })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant='subtitle1' component='p'>
          No Files Available
        </Typography>
      )}
    </Paper>
  );
};

export default PDFTable;
