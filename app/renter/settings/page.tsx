'use client'

import React, { useState } from 'react'

import { User, Shield, Lock, Eye, Edit2, Camera, Trash2, Check, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function AccountSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [editingField, setEditingField] = useState<keyof FormData | null>(null)
  const [formData, setFormData] = useState({
    fullname: 'Gladys Abelle',
    email: 'g***@gmail.com',
    phone: '090***98809',
    nin: '',
    address: '',
    birthdate: 'MM/YY/YYYY'
  })

  const sidebarItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'kyc', label: 'KYC', icon: Shield },
    { id: 'password', label: 'Password', icon: Lock },
    { id: 'privacy', label: 'Privacy', icon: Eye },
  ]


interface FormData {
    fullname: string
    email: string
    phone: string
    nin: string
    address: string
    birthdate: string
}

type EditingField = keyof FormData | null

const handleEdit = (field: keyof FormData): void => {
    setEditingField(field)
}

  const handleSave = (field: string) => {
    setEditingField(null)
    // Here you would typically save to backend
  }

  const handleCancel = () => {
    setEditingField(null)
    // Reset form data if needed
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/api/placeholder/80/80" alt="Profile" />
                  <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">DA</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                  <Camera className="h-4 w-4 mr-2" />
                  Change Picture
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50 hover:border-red-300">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { key: 'fullname', label: 'Full name', placeholder: 'Enter your full name' },
                { key: 'email', label: 'Email address', placeholder: 'Enter your email' },
                { key: 'phone', label: 'Phone number', placeholder: 'Enter your phone number' },
                { key: 'nin', label: 'Identity verification (NIN)', placeholder: 'Verify your account with your NIN' },
                { key: 'address', label: 'Residential address', placeholder: 'Enter your address' },
                { key: 'birthdate', label: 'Birthdate', placeholder: 'MM/DD/YYYY' }
              ].map(({ key, label, placeholder }) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</Label>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <Input
                        id={key}
                        value={formData[key as keyof FormData] || placeholder}
                        onChange={(e) => handleInputChange(key, e.target.value)}
                        className={`transition-all duration-200 ${
                          editingField === key 
                            ? 'border-blue-500 focus:border-blue-600 bg-white' 
                            : 'bg-gray-50 border-gray-200'
                        } ${
                          !formData[key as keyof FormData] || formData[key as keyof FormData] === placeholder 
                            ? 'text-gray-500' 
                            : 'text-gray-900'
                        }`}
                        readOnly={editingField !== key}
                        placeholder={editingField === key ? placeholder : ''}
                      />
                    </div>
                    <div className="flex space-x-1">
                      {editingField === key ? (
                        <>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleSave(key)}
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={handleCancel}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEdit(key as keyof FormData)}
                          className="text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'kyc':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Submit Required Documents</h2>
              <p className="text-gray-600">You are a few steps away from unlocking all features. Provide the information needed below.</p>
            </div>

            <div className="space-y-6">
              {/* Government Document */}
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Government Document</h3>
                    <p className="text-gray-600 text-sm">Upload your NIN slip</p>
                  </div>
                  <Button variant="outline" className="bg-white hover:bg-gray-50">
                    Upload file
                  </Button>
                </div>
              </div>

              {/* Proof of Income */}
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Proof of Income</h3>
                    <p className="text-gray-600 text-sm">Upload your bank statement (from 3months ago)</p>
                  </div>
                  <Button variant="outline" className="bg-white hover:bg-gray-50">
                    Upload file
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button 
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 text-lg font-medium"
                  size="lg"
                >
                  Submit Documents
                </Button>
              </div>
            </div>
          </div>
        )
      case 'password':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Password Settings</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>Update Password</Button>
            </div>
          </div>
        )
      case 'privacy':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Activity & Data Use</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="platform-activity">Allow my platform activity to be used for insights & product improvements</Label>
                <input type="checkbox" id="platform-activity" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="anonymized-data">Allow anonymized data for research, stats, and trends</Label>
                <input type="checkbox" id="anonymized-data" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Data Management</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">Download My Data</h4>
                  <p className="text-sm text-gray-600">Get a copy of your info, listings, and activity log (JSON/CSV)</p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Legal Reference</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-gray-800">We are committed to privacy</h4>
                  <p className="text-sm text-gray-600">We are committed to keeping your data protected. See details in our Privacy Policy.</p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Button>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg border-r min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-6">Settings</h1>
            <nav className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${activeTab === item.id ? 'text-blue-600' : 'text-gray-400'}`} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Card className="max-w-2xl shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <CardTitle className="text-2xl font-semibold text-gray-800">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AccountSettingsPage
