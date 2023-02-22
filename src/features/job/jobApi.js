import { apiSlice } from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "post",
        body: data,
      }),
      invalidatesTags: ["jobs"], //tahole post korar por data refetch hob
    }),
    apply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "patch",
        body: data,
      }),
      //invalidatesTags: ["jobs"], //tahole post korar por data refetch hob
    }),
    question: builder.mutation({
      query: (data) => ({
        url: "/query",
        method: "patch",
        body: data,
      }),
      invalidatesTags: ["job"], //tahole post korar por data refetch hob
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "/reply",
        method: "patch",
        body: data,
      }),
      invalidatesTags: ["job"], //tahole post korar por data refetch hob
    }),
    getJob: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
      providesTags: ["job"],
    }),
    getAllJobs: builder.query({
      query: () => ({
        url: "/jobs",
      }),
      providesTags: ["jobs"],
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
  }),
});
export const {
  usePostJobMutation,
  useGetJobQuery,
  useGetAllJobsQuery,
  useApplyMutation,
  useGetAppliedJobsQuery,
  useQuestionMutation,
  useReplyMutation,
} = jobApi;
