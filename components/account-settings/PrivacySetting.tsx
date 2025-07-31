import React from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { SwitchForm } from './SwitchForm'

const PrivacySetting = () => {
  return (
     <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Activity & Data Use
              </h3>
              <SwitchForm/>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Data Management
              </h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Download My Data
                  </h4>
                  <p className="text-sm text-gray-600">
                    Get a copy of your info, listings, and activity log
                    (JSON/CSV)
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Legal Reference
              </h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">
                    We are committed to privacy
                  </h4>
                  <p className="text-sm text-gray-600">
                    We are committed to keeping your data protected. See details
                    in our Privacy Policy.
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
  )
}

export default PrivacySetting