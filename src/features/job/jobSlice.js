import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addJob, deleteJob, editJob, getJob } from "./jobAPI"

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
    // search : "",
    // salary: []
}

export const fetchJobs = createAsyncThunk("job/fetchJobs", async() => {
    const job = await getJob();
    // console.log(salary)
    return job;
});

export const createJobs = createAsyncThunk("job/createJobs", async(data) => {
    const job = await addJob(data);
    return job;
});

export const changeJobs = createAsyncThunk("job/changeJobs", async({id, data}) => {
    const job = await editJob( id, data);
    return job;
});

export const removeJobs = createAsyncThunk("job/removeJobs", async(id) => {
    const job = await deleteJob(id);
    return job;
})

const jobSlice = createSlice({
    name: "job", 
    initialState,
    reducers: {
         editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive : (state) => {
            state.editing = {}
        },
        // isSearch : (state, action) => {
        //     state.search = action.payload
        //     // state.searchJobs = []
        //     // state.searchJobs.push(action.payload)
        // }, 
        // isSort: (state, action) => {
        //     state.salary = action.payload
        // }
    },

    extraReducers : (builder) => {
        builder
        .addCase(fetchJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = action.payload;
            // state.searchJobs = action.payload
            state.isError = false;
        })
        .addCase(fetchJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.jobs = [];
            state.error = action.error.message;
        })

        // create job
        .addCase(createJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(createJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs.push(action.payload);
            state.isError = false;
        })
        .addCase(createJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.jobs = [];
            state.error = action.error.message;
        })

        // edit job
        .addCase(changeJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(changeJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;

            const indexToUpdate = state.jobs.findIndex(j => j.id === action.payload.id);
            state.jobs[indexToUpdate] = action.payload;
        })
        .addCase(changeJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.jobs = [];
            state.error = action.error.message;
        })

        // delete job
        .addCase(removeJobs.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(removeJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;

            state.jobs = state.jobs.filter(j => j.id !== action.meta.arg);

        })
        .addCase(removeJobs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.jobs = [];
            state.error = action.error.message;
        })
    }

})

export default jobSlice.reducer;
export const {editActive, editInActive} = jobSlice.actions