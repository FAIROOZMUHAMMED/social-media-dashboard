
import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import MetricCard from './MetricCard'
import useFetch from '../hook/useFetch'

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null)
  const [engagementData, setEngagementData] = useState([])
  const { data: metricsData, loading: metricsLoading } = useFetch('https://api.example.com/metrics')
  const { data: engagementTrends, loading: engagementLoading } = useFetch('https://api.example.com/engagement')

  useEffect(() => {
    if (metricsData) {
      setMetrics(metricsData)
    }
  }, [metricsData])

  useEffect(() => {
    if (engagementTrends) {
      setEngagementData(engagementTrends)
    }
  }, [engagementTrends])

  if (metricsLoading || engagementLoading) {
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Followers" value={metrics?.totalFollowers} />
        <MetricCard title="Engagement Rate" value={`${metrics?.engagementRate}%`} />
        <MetricCard title="Post Reach" value={metrics?.postReach} />
        <MetricCard title="New Followers" value={metrics?.newFollowers} />
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Engagement Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="likes" stroke="#8884d8" />
            <Line type="monotone" dataKey="comments" stroke="#82ca9d" />
            <Line type="monotone" dataKey="shares" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

