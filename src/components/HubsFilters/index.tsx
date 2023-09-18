import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { Filters, Type, State } from 'types'

interface HubsFiltersProps {
  filters: Filters
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const HubsFilters = ({ filters, setFilters }: HubsFiltersProps) => {
  return (
    <FormControl
      sx={{
        width: '100%',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: '32px'
      }}
      size="small"
      variant="standard"
    >
      <Box minWidth={140}>
        <InputLabel id="select-company-type-label">Company Type</InputLabel>
        <Select
          labelId="select-company-type-label"
          id="select-company-type"
          value={filters.type}
          label="Type"
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value as Type })
          }
          sx={{ minWidth: 180 }}
        >
          <MenuItem value={'All'} key={'All'}>
            All
          </MenuItem>
          {Object.values(Type).map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <TextField
        id="company-text-search"
        label="Text Search"
        variant="standard"
        value={filters.textSearch}
        onChange={(e) => setFilters({ ...filters, textSearch: e.target.value })}
      />
      <FormControlLabel
        sx={{ alignItems: 'self-end' }}
        control={
          <Checkbox
            onChange={(e) =>
              setFilters({
                ...filters,
                state: e.target.checked ? State.ACTIVE : 'All'
              })
            }
            sx={{ paddingBottom: '0' }}
          />
        }
        label="Active"
      />
    </FormControl>
  )
}

export default HubsFilters
