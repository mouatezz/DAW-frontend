import React, { useState } from 'react';

const Profile = ({ initialProfile, onSave, onCancel, isLoading = false, readOnly = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    domain: '',
    specialization: '',
    skills: [],
    bio: '',
    profilePicture: null,
  });
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProfile({ ...editedProfile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setEditedProfile({ ...editedProfile, skills });
  };

  const handleSaveProfile = async () => {
    try {
      if (onSave) {
        await onSave(editedProfile);
      }
      setProfile(editedProfile);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="flex items-center mb-6 space-x-6">
        <div className="relative w-24 h-24">
          <img
            src={profile.profilePicture || '/src/assets/profile.png'}  // Default profile photo path
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          )}
        </div>
        <h1 className="text-3xl font-semibold text-blue-600">Profile</h1>
      </div>

      {isEditing ? (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={editedProfile.firstName}
              onChange={(e) => setEditedProfile({ ...editedProfile, firstName: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={editedProfile.lastName}
              onChange={(e) => setEditedProfile({ ...editedProfile, lastName: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone"
            value={editedProfile.phone}
            onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Domain"
            value={editedProfile.domain}
            onChange={(e) => setEditedProfile({ ...editedProfile, domain: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Specialization"
            value={editedProfile.specialization}
            onChange={(e) => setEditedProfile({ ...editedProfile, specialization: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Skills (comma-separated)"
            value={editedProfile.skills.join(', ')}
            onChange={handleSkillsChange}
            className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Bio"
            value={editedProfile.bio}
            onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
            className="border border-gray-300 rounded-lg p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-end space-x-6">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedProfile({ ...profile });
                onCancel && onCancel();
              }}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              onClick={handleSaveProfile}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              disabled={isLoading}
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-lg text-blue-600">Personal Information</h2>
            <p className="text-gray-700">Name: {profile.firstName} {profile.lastName}</p>
            <p className="text-gray-700">Email: {profile.email}</p>
            <p className="text-gray-700">Phone: {profile.phone}</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-blue-600">Academic Information</h2>
            <p className="text-gray-700">Domain: {profile.domain}</p>
            <p className="text-gray-700">Specialization: {profile.specialization}</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-blue-600">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-blue-600">Bio</h2>
            <p className="text-gray-700">{profile.bio}</p>
          </div>
          {!readOnly && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                disabled={isLoading}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
