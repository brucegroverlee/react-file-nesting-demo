import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export type Props = {
  onSearch: (value: string) => void;
};

export const SeachForm = ({ onSearch }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = event.currentTarget.search.value;
    onSearch(value);
    event.currentTarget.search.value = "";
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        id="search"
        placeholder="What do you want to listen to?"
        size="small"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
