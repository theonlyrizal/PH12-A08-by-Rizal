import React, { useContext, useMemo, useState } from 'react';
import { AppInstallContext } from '../../context/AppInstallProvider';
import InstalledContainer from '../../components/InstalledContainer/InstalledContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Installation = () => {
  const { installedApps } = useContext(AppInstallContext);

  const [sort, setSort] = useState('');

  const handleSort = (e) => {
    if (e.target.value === 'dlasc') {
      setSort('dlasc');
    } else if (e.target.value === 'dldes') {
      setSort('dldes');
    } else if (e.target.value === 'rtasc') {
      setSort('rtasc');
    } else if (e.target.value === 'rtdes') {
      setSort('rtdes');
    } else {
      setSort('');
    }
  };

  const sortedApps = useMemo(() => {
    if (sort === 'dlasc') return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    if (sort === 'dldes') return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    if (sort === 'rtasc') return [...installedApps].sort((a, b) => b.ratingAvg - a.ratingAvg);
    if (sort === 'rtdes') return [...installedApps].sort((a, b) => a.ratingAvg - b.ratingAvg);
    return installedApps;
  }, [installedApps, sort]);

  return (
    <div>
      <div className="p-15 space-y-5">
        <h1 className="text-5xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-center text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 justify-between px-5 md:px-16 my-10 overflow-x-hidden">
        <p className="text-2xl font-bold">
          <span>({installedApps.length})</span> Apps Found
        </p>
        <select value={sort} onChange={handleSort} className="select w-60">
          <option value="" disabled>
            Sort
          </option>
          <option value="dlasc">Downloads (High to Low)</option>
          <option value="dldes">Downloads (Low to High)</option>
          <option value="rtasc">Rating (High to Low)</option>
          <option value="rtdes">Rating (Low to High)</option>
        </select>
      </div>
      <InstalledContainer installedApps={sortedApps} />
    </div>
  );
};

export default Installation;
