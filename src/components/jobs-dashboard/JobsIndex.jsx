import Job from './Job'

const JobsIndex = ({ jobList, search }) => {
  const filteredJobs = jobList.filter(
    (job) =>
      (job.algorithmId.algoName &&
        job.algorithmId.algoName.toLocaleLowerCase().includes(search)) ||
      (job.jobName && job.jobName.toLocaleLowerCase().includes(search))
  )

  return (
    filteredJobs && (
      <>
        <div
          className="container mx-auto flex justify-around "
          styles={{ zIndex: '100' }}
        >
          <div
            styles={{ zIndex: '100' }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
          >
            {filteredJobs.map((item, i) => (
              <Job key={i} item={item} />
            ))}
          </div>
        </div>
      </>
    )
  )
}

export default JobsIndex
