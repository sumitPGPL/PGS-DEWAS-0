"use client";
import { USER_INITIAL, userTypes } from "@/lib/constants";
import React, { useEffect, useState } from "react";
import UserTypesDropDown from "../Dropdown/UserTypesDropDown";
import { addUser, updateUser } from "@/lib/services/user/userServices";
import ProfileUploader from "../UploadFile/DpUploader";
import { useUserConext } from "@/features/context/UserContext";
import { first, isEmpty } from "lodash";
import { uploadImg } from "@/lib/services/files/fileServices";
import Tooltip from "@/components/Tooltip/Tooltip";
import { toast } from "react-toastify";
import { validateInputs } from "@/lib/helpers/isValidInput";

const UserForm = ({ roles = [] }) => {
  const [user, setUser] = useState(USER_INITIAL);
  const [password, setPassword] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prevImagePreview, setPrevImagePreview] = useState(null); // State for previously used image preview
  const { userState, setUserState } = useUserConext();
  const [showTooltip, setShowTooltip] = useState(false);
  const handleHover = (event) => {
    setShowTooltip(true);
  };

  const handleLeave = () => {
    setShowTooltip(false);
  };

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setUser((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUser = async () => {
    if (!image && !image?.size > 0) {
      toast.warning(`Profile image can't be empty.`);
      return
    }
    const res = validateInputs({ ...user, password });
    if (res !== true) {
      toast.warning(res);
      return;
    } else {
      let imgRes = await uploadImg({ img: image, category: "profile" });
      if (imgRes) {
        await addUser({ ...user, password: password, profilePicture: imgRes });
        setUser(USER_INITIAL);
        setImage(null);
        setImagePreview(null);
        setPassword(null);
      } else {
        //TODO: handle failure
      }
    }
  };

  const handleCancel = () => {
    setUserState((prev) => ({ ...prev, user: {} }));
    setUser(USER_INITIAL);
    setImage(null);
    setImagePreview(null);
  };

  const handleUpdate = async () => {
    const res = validateInputs({ ...user, password });
    if (!res) {
      toast.warning(res.err);
      return;
    } else {
      if (isEmpty(password)) {
        delete user.password;
      } else {
        setUser((prev) => ({ ...prev, password: password }));
      }
      if (user.profilePicture !== image) {
        let imgRes = await uploadImg({ img: image, category: "profile" });
        if (imgRes) {
          let res = await updateUser({ ...user, profilePicture: imgRes });
          setUser(USER_INITIAL);
          setImage(null);
          setImagePreview(null);
          setPassword(null);
        } else {
          //TODO: handle error
        }
      } else {
        let res = await updateUser(user);
        setUser({ ...USER_INITIAL });
        setImage(null);
        setImagePreview(null);
        setPassword(null);
      }
    }
  };
  useEffect(() => {
    if (!isEmpty(userState.user)) {
      let userRoles = first(userState?.user?.Roles);
      setImage(userState.user.profilePicture);
      setImagePreview(userState.user.profilePicture);
      setPrevImagePreview(userState.user.profilePicture); // Set previously used image preview
      setUser({ ...userState.user, roles: [userRoles?.uuid] });
    }
  }, [userState.user]);

  return (
    <div class="p-2 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
                <p className="font-medium text-lg mt-5">
                  Upload Profile Pciture
                </p>
                <ProfileUploader image={image} setImage={setImage} />
              </div>

              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div class="md:col-span-2">
                    <label for="address">First Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="firstName"
                      value={user.firstName}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter first name"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="lastName"
                      value={user.lastName}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter last name"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="email"
                      value={user.email}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter valid email address"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label for="Phone">Phone</label>
                    <input
                      type="tel"
                      onChange={handleChange}
                      name="phone"
                      value={user.phone}
                      maxLength={10}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter mobile number"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="address">Address </label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="address"
                      value={user.address}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter address"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city">City</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="city"
                      value={user.city}
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter City"
                    />
                  </div>

                  <div class="md:col-span-2">
                    {showTooltip && !isEmpty(userState.user) ? (
                      <Tooltip
                        text={"Enter password if you want to update password "}
                      />
                    ) : (
                      ""
                    )}
                    <label for="password">Password</label>
                    <div
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                    >
                      <input
                        autoComplete="new-password"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={password}
                        placeholder="password"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>
                  <div class="md:col-span-1">
                    <label for="state">State</label>
                    <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        onChange={handleChange}
                        value={user.state}
                        placeholder="Enter State"
                        class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div class="md:col-span-1">
                    <label for="pinCode">Pin code</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="pinCode"
                      value={user.pinCode}
                      class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter pincode"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <div class="inline-flex items-center gap-2">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="isActive"
                          checked={user.isActive}
                          value={user.isActive}
                          onChange={handleChange}
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Mark as Active
                        </span>
                      </label>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="isSuspicious"
                          checked={user.isSuspicious}
                          value={user.isSuspicious}
                          onChange={handleChange}
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Mark as Suspicious
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <UserTypesDropDown
                      roles={roles}
                      uuid={user?.roles[0]}
                      state={setUser}
                    />
                  </div>
                  <div class="md:col-span-5 text-center">
                    <div class="inline-flex items-end gap-2">
                      {isEmpty(userState.user) ? (
                        <button
                          onClick={handleUser}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={handleUpdate}
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Update
                        </button>
                      )}
                      {!isEmpty(userState.user) && (
                        <button
                          onClick={handleCancel}
                          class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
