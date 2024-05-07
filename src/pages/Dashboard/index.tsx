import type { SelectChangeEvent } from '@mui/material';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface News {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const LandingPage = () => {
  const [news, setNews] = useState<News[]>([]);
  const [country, setCountry] = useState<string>('us');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const url = searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=20&page=${page}&apiKey=5073e0943df64f3e8d4bf510b980259d`
      : `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&apiKey=5073e0943df64f3e8d4bf510b980259d`;

    axios
      .get(url)
      .then((response) => {
        setNews(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / 20));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [country, page, searchQuery]);

  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    setPage(1);
  };
  return (
    <div className="">
      <Container>
        <div className="my-2">
          <div className="py-2 px-1">
            <div className="p-4">
              <div className="">
                <div className="mb-4 flex items-center justify-between">
                  <Select value={country} onChange={handleCountryChange}>
                    <MenuItem value="uk">UK</MenuItem>
                    <MenuItem value="us">US</MenuItem>
                  </Select>
                  <TextField
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                  />
                </div>
                {news.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {news.map((article) => (
                        <Card key={article.title} sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={article.urlToImage}
                            alt={article.title}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {article.description}
                            </Typography>
                            <a href={article.url}>Read more</a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                      />
                    </div>
                  </>
                ) : (
                  <Typography variant="h6" align="center">
                    No data found
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
