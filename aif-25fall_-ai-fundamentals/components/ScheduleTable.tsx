
import React from 'react';
import { scheduleData } from '../constants';
import { ScheduleItem } from '../types';

interface ProcessedScheduleItem extends ScheduleItem {
  projectRowSpan: number;
  isProjectStart: boolean;
}

const ScheduleTable: React.FC = () => {
  const processedSchedule: ProcessedScheduleItem[] = [];

  for (let i = 0; i < scheduleData.length; i++) {
    const currentItem = { ...scheduleData[i], projectRowSpan: 0, isProjectStart: false };

    // If there is a project (not an empty string), it's the start of a potential span.
    if (currentItem.project.trim() !== '') {
        currentItem.isProjectStart = true;
        let rowSpan = 1;
        // Look ahead to see how many empty project cells follow
        for (let j = i + 1; j < scheduleData.length; j++) {
            if (scheduleData[j].project.trim() === '') {
                rowSpan++;
            } else {
                break; // Stop when we hit the next project
            }
        }
        currentItem.projectRowSpan = rowSpan;
    }
    processedSchedule.push(currentItem);
  }

  return (
    <div className="border border-slate-800 rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-slate-300">
          <thead className="text-xs text-slate-300 uppercase bg-slate-800/80">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Date</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Lecture / Seminar</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Problem Set (due by lecture)</th>
              <th scope="col" className="px-6 py-4 font-semibold tracking-wider">Project</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {processedSchedule.map((item, index) => (
              <tr key={index} className="hover:bg-slate-800/50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-100 align-top">{item.date}</td>
                <td className="px-6 py-4 align-top">{item.topic}</td>
                <td className="px-6 py-4 align-top">{item.problemSet || <span className="text-slate-500">N/A</span>}</td>
                {item.isProjectStart && (
                  <td 
                    className="px-6 py-4 align-middle" 
                    rowSpan={item.projectRowSpan}
                  >
                    {item.project}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
