import React, { useState, useEffect } from 'react';
import { Table, TextField, Button, Select, MenuItem, FormControl, Grid, Paper, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
import {
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import TrainingForm from './Trainingforms';
import ReactPaginate from 'react-paginate';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import './AdminTrainingTable.css';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SideNav from '../side_nav/side_nav'
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AdminService from '../../services/AdminService';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


const TrainingTable = (props) => {


  const [isTrainingFormOpen, setTrainingFormOpen] = useState(false);
  const[gettingAll,setGettingall]=useState([]);
  const [searchTerm, setSearchTerm] = useState(''); //search
  const [filterCategory, setFilterCategory] = useState('All'); //filtering
  const [isSideNavOpen, setIsSideNavOpen] = useState(false); //responsive navba
  const [getIddata,setIdData]=useState([])
  const navigate=useNavigate();
  const handleCloseTrainingForm = () => {
    setTrainingFormOpen(false);
  };


  const getAllDetails=()=>{
    
    AdminService.getAllTrainingDetails()
    .then((data)=>{
      console.log(data.data.alldata);
      setGettingall(data.data.alldata);
      setFiltertitle(data.data.alldata.TrainingTitle);
      
    }).catch(err=>{
      console.log(err)
      toast.error("Error fetching data",{autoClose: 1000})
    })
  }

const editUser=(id)=>{
 console.log(id)

AdminService.getTrainingById(id).then((data)=>{
console.log(data.data.iddata);
setIdData(data.data.iddata)
props.history.push({
  pathname: '/edit',
  state: { getIddata }, // Pass the data as a state object
});
}).catch(err=>{
  console.log("error");
})
}

  return (
    <Grid container spacing={3}>
      <div className="large-screen-nav">
        <SideNav />
      </div>
      <div className="small-screen-nav">
        <IconButton
          color="inherit"
          aria-label="menu"
          className="hamburger-icon"
          onClick={toggleSideNav}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {isSideNavOpen && (
        <div className="side-nav">
          <SideNav /> {/* Place your SideNav component here */}
        </div>
      )}
      <h1 className="lbheading"><strong>Learning and Development</strong></h1>
      <Grid item xs={12} className="headers">
        <Paper className="paper-container">
          <div className="paper-content">
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="responsive-search"
            />
          </div>
          <div className="paper-content">
            <FormControl className="form-control responsive-select">
              {/* <InputLabel htmlFor="categoryFilter" className="label-filter">
                Filter by Category:
              </InputLabel> */}
              <Select
                id="categoryFilter"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <MenuItem value="All">All</MenuItem>
                {gettingAll.map((title)=>{
                  return <MenuItem value={title.TrainingTitle}>{title.TrainingTitle}</MenuItem>
                })}
{/*                 
                <MenuItem value="azure">azure</MenuItem>
                <MenuItem value="sql">sql</MenuItem>
                <MenuItem value="html">html</MenuItem>
                <MenuItem value="css">css</MenuItem>
                <MenuItem value="synapse">synapse</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <div className="paper-content">
            <Button
              variant="outlined"
              id="register_button_admin"
              className="responsive-button"
              startIcon={<AddIcon />}
              onClick={handleOpenTrainingForm}
            >
              Add New Training
            </Button>
          </div>
        </Paper>
      </Grid>

    
        <Grid item xs={12}>
          <Paper className="content">
            <div className="table-responsive">
              <Table className="table-responsive table table-hover table-borderless">
                <thead className='tableheadings'>
                  <tr>
                    <td className="tf">Training Title</td>
                    <td className="tf">Skill Type</td>
                    <td className="tf">Skill Category</td>
                    <td className="tf">Start Date</td>
                    <td className="tf">Start Time</td>
                    <td className="tf">End Date </td>
                    <td className="tf">End Time </td>
                    <td className="tf">Participation limit</td>
                    <td className='tf'>Number of Registrations</td>
                    <td className="tf">Mode</td>
                    <td className="tf">Location/Meeting Link</td>
                    <td className="tf">Description</td>
                    <td className="tf">Edit</td>
                    <td className="tf">Delete</td>
                  </tr>
                </thead>
                <tbody>
                {displayedTrainings.map((training,index) => (
                    <tr key={training.TrainingId}>
                      <td className='td'>{training.TrainingTitle}</td>
                      <td className='td'>{training.SkillTitle}</td>
                      <td className='td'>{training.SkillCategory}</td>
                      <td className='td'>{(training.StartDate).split('T')[0]}</td>
                      <td>{new Date((training.StartDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} </td>
                      <td className='td'>{(training.EndDate).split('T')[0]}</td>
                      <td>{new Date((training.EndDate)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} </td>
                      <td className='td'>{training.ParticipationLimit}</td>
                      <td className='td'>{training.PeopleRegistered}</td>
                      <td className='td'>{training.TrainingMode}</td>
                      <td className='td'>{training.MeetingLink}</td>
                      <td className='td'>{training.Description}</td>
                      <td>

                        <Button
                          id="button12"
                          variant="outlined"
                          startIcon={<EditIcon />}
                          onClick={() => editUser(training.TrainingId)}
                        >
                        </Button>

                      </td>
                      <td>
                        <Button
                          id='delete_button_admin'
                         // variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => deleteUser(training.TrainingId)}
                        >
                          
                        </Button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <Grid item xs={12}>
        <div className="pagination-container">
          <ReactPaginate
            previousLabel={<span className="previous"><b>&lt;</b></span>}
            nextLabel={<span className="next"><b>&gt;</b></span>}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </Grid>
          </Paper>
     

  
        </Grid>
 
     
      <Dialog open={isTrainingFormOpen} onClose={handleCloseTrainingForm} >
        <Button onClick={handleCloseTrainingForm} className='closebuttonpop'>
          <CancelPresentationIcon fontSize='large'/>
        </Button>

        <DialogContent>
          {/* Render the TrainingForm component with isEditing and editedTraining props */}
          <TrainingForm
            onCancel={handleCloseTrainingForm}
          />
        </DialogContent>
        <DialogActions>


        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default TrainingTable;