import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addImages } from "../../Redux/services/Image";


const AddImages = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => { 
        formData.append(key, data[key]);
    });

    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }


    formData.append("is_active", true);
    // Log the formData contents
    for (let [key, value] of formData.entries()) {
      console.log(key, value); // Log the FormData key-value pairs
    }


    try {
      const response = await dispatch(addImages(formData)); // Replace Add_historian with your action
      console.log("Response: ", response); // Log the response to inspect it

      // Check if the response is successful
      if (response?.payload?.status === true) {
        // Fetch the latest historian data after the historian is successfully added
        await dispatch(get_historian_data()); // This is your action to get the latest historian data

        // Close the modal after successful submission
        const closeButton = document.querySelector("#add_user .btn-close");
        if (closeButton) {
          closeButton.click(); // Simulate the click to close the modal
          reset();
        }

        console.log(
          "Historian added successfully, modal closed, and data updated!"
        );
      } else {
        console.error("Failed to add historian:", response?.payload?.message);
      }
    } catch (error) {
      console.error("Error during add historian:", error);
    }
  };
  // useEffect(() => {
  //   dispatch(getSubCategories());
  // }, []);
  return (
    <div id="add_user" className="modal custom-modal fade" role="dialog">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Images</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                {/* Image Title */}
                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Title</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("image_title", {
                        required: "Image Title is required",
                      })}
                      placeholder="Image Title"
                    />
                    {errors.blog_title && (
                      <small className="text-danger">
                        {errors.blog_title.message}
                      </small>
                    )}
                  </div>
                </div>
                {/* Image Description */}
                <div className="col-sm-12">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      {...register("image_description", {
                        required: "Image Description is required",
                      })}
                      placeholder="Image Description"
                    ></textarea>
                    {errors.image_description && (
                      <small className="text-danger">
                        {errors.image_description.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="input-block mb-3">
                    <label className="col-form-label">Image</label>
                    <input
                      className="form-control"
                      type="file"
                      {...register("image", {
                        required: "Image is required",
                      })}
                    />
                    {errors.image && (
                      <small className="text-danger">
                        {errors.image.message}
                      </small>
                    )}
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImages;
