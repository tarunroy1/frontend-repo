//updated code 5SEp line 2 to 157 
// const apiBase = 'http://localhost:4000/api';
// const token = localStorage.getItem('token');

// if (!token) {
//     window.location.href = 'login.html';
// }

// const authHeaders = {
//     'Authorization': `Bearer ${token}`
// };

// // Load data on page load
// window.onload = () => {
//     loadAdmins();
//     loadPapers();
// };

// // Load and display papers
// async function loadPapers() {
//     try {
//         const res = await fetch(`${apiBase}/papers`, {
//             headers: authHeaders,
//         });
        
//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
        
//         const papers = await res.json();
//         renderTable(papers);
//     } catch (error) {
//         console.error('Error loading papers:', error);
//         alert('Error loading papers: ' + error.message);
//     }
// }

// // Upload form submission
// document.getElementById('uploadForm').onsubmit = async function (e) {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('title', document.getElementById('title').value);
//     formData.append('dept', document.getElementById('department').value);
//     formData.append('semester', document.getElementById('semester').value);
//     formData.append('year', document.getElementById('year').value);
//     formData.append('subject', document.getElementById('subject').value);
//     formData.append('file', document.getElementById('file').files[0]);
    
//     try {
//         const res = await fetch(`${apiBase}/papers`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             },
//             body: formData,
//         });
        
//         const result = await res.json();
        
//         if (res.ok) {
//             alert('Paper uploaded successfully!');
//             document.getElementById('uploadForm').reset();
//             loadPapers(); // Refresh the table
//         } else {
//             alert('Upload failed: ' + result.error);
//         }
//     } catch (error) {
//         console.error('Upload error:', error);
//         alert('Upload error: ' + error.message);
//     }
// };

// // Render papers table
// function renderTable(papers) {
//     const tbody = document.getElementById('paperRows');
//     tbody.innerHTML = '';
    
//     papers.forEach(p => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${p.title}</td>
//             <td>${p.dept}</td>
//             <td>${p.semester}</td>
//             <td>${p.year}</td>
//             <td>${p.subject}</td>
//             <td><span class="status-${p.status.toLowerCase()}">${p.status}</span></td>
//             <td>
//                 ${p.status === 'Pending' ? 
//                     `<button onclick="approvePaper('${p._id}')" class="btn-approve">Approve</button>` : 
//                     '<span>Approved</span>'
//                 }
//                 <button onclick="deletePaper('${p._id}')" class="btn-delete">Delete</button>
//             </td>
//         `;
//         tbody.appendChild(tr);
//     });
// }

// // Approve paper
// async function approvePaper(id) {
//     try {
//         const res = await fetch(`${apiBase}/papers/${id}/approve`, {
//             method: 'PATCH',
//             headers: authHeaders,
//         });
        
//         if (res.ok) {
//             alert('Paper approved!');
//             loadPapers();
//         } else {
//             const error = await res.json();
//             alert('Approval failed: ' + error.error);
//         }
//     } catch (error) {
//         alert('Error: ' + error.message);
//     }
// }

// // Delete paper
// async function deletePaper(id) {
//     if (confirm('Are you sure you want to delete this paper?')) {
//         try {
//             const res = await fetch(`${apiBase}/papers/${id}`, {
//                 method: 'DELETE',
//                 headers: authHeaders,
//             });
            
//             if (res.ok) {
//                 alert('Paper deleted!');
//                 loadPapers();
//             } else {
//                 const error = await res.json();
//                 alert('Delete failed: ' + error.error);
//             }
//         } catch (error) {
//             alert('Error: ' + error.message);
//         }
//     }
// }

// // Load admins (if needed)
// async function loadAdmins() {
//     try {
//         const res = await fetch(`${apiBase}/admins`, {
//             headers: authHeaders,
//         });
        
//         if (res.ok) {
//             const admins = await res.json();
//             console.log('Admins loaded:', admins.length);
//         }
//     } catch (error) {
//         console.error('Error loading admins:', error);
//     }
// }


//main code ********



// const apiBase = 'http://localhost:4000/api'; // or your deployed backend URL

// const token = localStorage.getItem('token');
// if (!token) {
//   // Redirect to login if no token
//   window.location.href = 'login.html';
// }

// // Common headers with auth
// const authHeaders = {
//   Authorization: `Bearer ${token}`,
// };

// // On page load, fetch admins and papers from backend
// window.onload = () => {
//   loadAdmins();
//   loadPapers();
// };

// // Fetch and render papers
// async function loadPapers() {
//   try {
//     const res = await fetch(`${apiBase}/papers`, {
//       headers: authHeaders,
//     });
//     if (!res.ok) throw new Error('Failed to fetch papers');
//     const papers = await res.json();
//     renderTable(papers);
//   } catch (error) {
//     alert('Error loading papers: ' + error.message);
//   }
// }

// document.getElementById('uploadForm').onsubmit = async function (e) {
//   e.preventDefault();

//   // ...code to get form values and create formData...

//   try {
//     const res = await fetch('http://localhost:4000/api/papers', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         // Do NOT set Content-Type for FormData!
//       },
//       body: formData,
//     });
//     // ...handle response and errors...
//   } catch (error) {
//     alert('Upload error: ' + error.message);
//   }
// };

// // Render papers table
// function renderTable(papers) {
//   const tbody = document.getElementById('paperRows');
//   tbody.innerHTML = '';

//   papers.forEach(p => {
//     const tr = document.createElement('tr');

//     tr.innerHTML = `
//       <td>${p.title}</td>
//       <td>${p.dept}</td>
//       <td>${p.semester}</td>
//       <td>${p.year}</td>
//       <td>${p.subject}</td>
//       <td class="status ${p.status === 'Approved' ? 'approved' : ''}">${p.status}</td>
//       <td class="actions">
//         ${
//           p.status !== 'Approved'
//             ? `<button class="approve" onclick="approvePaper('${p._id}')">Approve</button>`
//             : `<button disabled class="approve approved">Approved</button>`
//         }
//         <button class="delete" onclick="deletePaper('${p._id}')">Delete</button>
//       </td>
//     `;
//     tbody.appendChild(tr);
//   });
// }

// // Approve paper
// async function approvePaper(id) {
//   try {
//     const res = await fetch(`${apiBase}/papers/${id}/approve`, {
//       method: 'PUT',
//       headers: authHeaders,
//     });
//     if (!res.ok) throw new Error('Failed to approve paper');
//     await loadPapers();
//   } catch (error) {
//     alert('Error approving paper: ' + error.message);
//   }
// }

// // Delete paper
// async function deletePaper(id) {
//   if (!confirm('Are you sure you want to delete this paper?')) return;
//   try {
//     const res = await fetch(`${apiBase}/papers/${id}`, {
//       method: 'DELETE',
//       headers: authHeaders,
//     });
//     if (!res.ok) throw new Error('Failed to delete paper');
//     await loadPapers();
//   } catch (error) {
//     alert('Error deleting paper: ' + error.message);
//   }
// }


// document.getElementById('uploadForm').onsubmit = async function (e) {
//   e.preventDefault();

//   // ...code to get form values and create formData...

//   try {
//     const res = await fetch('http://localhost:4000/api/papers', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         // Do NOT set Content-Type for FormData!
//       },
//       body: formData,
//     });
//     // ...handle response and errors...
//   } catch (error) {
//     alert('Upload error: ' + error.message);
//   }
// };

// // Modal controls
// const modal = document.getElementById('modal');
// document.getElementById('addPaperBtn').onclick = () => modal.classList.remove('hidden');
// document.getElementById('closeModalBtn').onclick = () => modal.classList.add('hidden');

// // Upload new paper form submit handler
// document.getElementById('uploadForm').onsubmit = async function (e) {
//   e.preventDefault();

//   const title = document.getElementById('title').value.trim();
//   const dept = document.getElementById('dept').value;
//   const semester = document.getElementById('sem').value;
//   const year = document.getElementById('year').value;
//   const subject = document.getElementById('subject').value.trim();
//   const file = document.getElementById('paperFile').files[0];

//   if (!title || !dept || !semester || !year || !subject || !file) {
//     alert('Please fill all fields and select a file');
//     return;
//   }

//   const formData = new FormData();
//   formData.append('title', title);
//   formData.append('dept', dept);
//   formData.append('semester', semester);
//   formData.append('year', year);
//   formData.append('subject', subject);
//   formData.append('file', file);

//   try {
//     const res = await fetch(`${apiBase}/papers`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         // Content-Type NOT set! Let browser handle it for FormData
//       },
//       body: formData,
//     });
//     if (!res.ok) {
//       const errData = await res.json();
//       throw new Error(errData.error || 'Failed to upload paper');
//     }
//     alert('Paper uploaded successfully. Pending approval.');
//     modal.classList.add('hidden');
//     document.getElementById('uploadForm').reset();
//     await loadPapers();
//   } catch (error) {
//     alert('Upload error: ' + error.message);
//   }
// };

// // Logout button
// document.getElementById('logoutBtn').onclick = function () {
//   localStorage.removeItem('token');
//   window.location.href = 'login.html';
// };

// // Admin users management

// async function loadAdmins() {
//   try {
//     const res = await fetch(`${apiBase}/admins`, {
//       headers: authHeaders,
//     });
//     if (!res.ok) throw new Error('Failed to load admins');
//     const admins = await res.json();
//     renderAdminList(admins);
//   } catch (error) {
//     alert('Error loading admins: ' + error.message);
//   }
// }

// function renderAdminList(admins) {
//   const list = document.getElementById('adminList');
//   list.innerHTML = '';

//   admins.forEach(admin => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       ${admin.username}
//       <button onclick="deleteAdmin('${admin._id}')">❌ Remove</button>
//     `;
//     list.appendChild(li);
//   });
// }

// // Add new admin
// document.getElementById('addAdminForm').addEventListener('submit', async e => {
//   e.preventDefault();

//   const username = document.getElementById('newAdminUser').value.trim();
//   const password = document.getElementById('newAdminPass').value.trim();

//   if (!username || !password) {
//     alert('Please enter username and password');
//     return;
//   }

//   try {
//     const res = await fetch(`${apiBase}/auth/signup`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.error || 'Failed to add admin');

//     alert('Admin added successfully');
//     document.getElementById('addAdminForm').reset();
//     await loadAdmins();
//   } catch (error) {
//     alert('Add admin error: ' + error.message);
//   }
// });

// // Delete admin
// async function deleteAdmin(id) {
//   if (!confirm('Delete this admin?')) return;

//   try {
//     const res = await fetch(`${apiBase}/admins/${id}`, {
//       method: 'DELETE',
//       headers: authHeaders,
//     });
//     if (!res.ok) throw new Error('Failed to delete admin');
//     await loadAdmins();
//   } catch (error) {
//     alert('Error deleting admin: ' + error.message);
//   }
// }




// updated code sep5 approved try
const apiBase = "https://question-bank-backend-2.onrender.com/api";
//  const apiBase = '/api';
//const apiBase = 'https://yourapp.onrender.com/api';

let token = localStorage.getItem('token');

// Simple token check
if (!token) {
  console.log('❌ No auth token found');
  alert('Please login first');
  window.location.href = 'login.html';
} else {
  console.log('✅ Auth token found');
}

// Dynamic auth headers
const getAuthHeaders = () => ({
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json'
});

// On page load - SIMPLIFIED
window.onload = () => {
  console.log('🚀 Admin panel loading...');
  if (token) {
    loadAdmins();
    loadPapers();
  }
};

// Fetch and render papers - FIXED VERSION
async function loadPapers() {
  try {
    console.log('📋 Loading papers...');
    
    const currentToken = localStorage.getItem('token');
    if (!currentToken) {
      throw new Error('No authentication token');
    }

    const res = await fetch(`${apiBase}/papers`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${currentToken}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('📡 Papers response status:', res.status);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || `HTTP ${res.status}: ${res.statusText}`);
    }

    const papers = await res.json();
    console.log(`✅ Loaded ${papers.length} papers`);
    
    renderTable(papers);
    
  } catch (error) {
    console.error('❌ Error loading papers:', error);
    if (error.message.includes('401') || error.message.includes('Invalid token')) {
      alert('❌ Session expired. Please login again.');
      localStorage.removeItem('token');
      window.location.href = 'login.html';
    } else {
      alert('❌ Error loading papers: ' + error.message);
    }
  }
}

// Render papers table
function renderTable(papers) {
  console.log('🎨 Rendering table with', papers.length, 'papers');
  
  const tbody = document.getElementById('paperRows');
  if (!tbody) {
    console.error('❌ Table body element "paperRows" not found!');
    return;
  }

  tbody.innerHTML = '';

  if (papers.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding: 20px;">📋 No papers uploaded yet</td></tr>';
    return;
  }

  papers.forEach((paper) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${paper.title || 'N/A'}</td>
      <td>${paper.dept || 'N/A'}</td>
      <td>${paper.semester || 'N/A'}</td>
      <td>${paper.year || 'N/A'}</td>
      <td>${paper.subject || 'N/A'}</td>
      <td class="status ${paper.status === 'Approved' ? 'approved' : ''}">${paper.status}</td>
      <td class="actions">
        ${paper.status !== 'Approved' ? 
          `<button class="approve" onclick="approvePaper('${paper._id}')">✅ Approve</button>` : 
          `<button disabled class="approve approved">✅ Approved</button>`
        }
        <button class="delete" onclick="deletePaper('${paper._id}')">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  console.log(`✅ Successfully rendered ${papers.length} papers in table`);
}

// FIXED Approve paper function
async function approvePaper(paperId) {
  try {
    console.log('✅ Approving paper:', paperId);
    
    if (!paperId || paperId === 'undefined') {
      throw new Error('Invalid paper ID');
    }
    
    const currentToken = localStorage.getItem('token');
    if (!currentToken) {
      throw new Error('Please login first');
    }

    // Try PATCH first
    let response = await fetch(`${apiBase}/papers/${paperId}/approve`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${currentToken}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('📡 Response status:', response.status);

    // If PATCH fails, try PUT
    if (!response.ok && response.status === 405) {
      console.log('⚠️ Trying PUT method...');
      response = await fetch(`${apiBase}/papers/${paperId}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${currentToken}`,
          'Content-Type': 'application/json'
        }
      });
    }

    const result = await response.json();
    console.log('📋 Response:', result);

    if (response.ok) {
      console.log('✅ Approval successful!');
      alert('✅ Paper approved successfully!');
      await loadPapers();
    } else {
      throw new Error(result.error || `Error: ${response.status}`);
    }

  } catch (error) {
    console.error('❌ Approval failed:', error);
    alert('❌ Approval failed: ' + error.message);
  }
}

// Delete paper
async function deletePaper(paperId) {
  if (!confirm('Are you sure you want to delete this paper?')) {
    return;
  }

  try {
    console.log('🗑️ Deleting paper:', paperId);
    
    const currentToken = localStorage.getItem('token');
    const response = await fetch(`${apiBase}/papers/${paperId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${currentToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert('✅ Paper deleted successfully!');
      await loadPapers();
    } else {
      const result = await response.json();
      throw new Error(result.error || 'Delete failed');
    }
  } catch (error) {
    console.error('❌ Delete failed:', error);
    alert('❌ Delete failed: ' + error.message);
  }
}

// Upload form handler
document.addEventListener('DOMContentLoaded', function() {
  const uploadForm = document.getElementById('uploadForm');
  if (uploadForm) {
    uploadForm.onsubmit = async function (e) {
      e.preventDefault();

      // Get form elements (try multiple possible IDs)
      const title = document.getElementById('title')?.value?.trim() || 
                   document.getElementById('paperTitle')?.value?.trim();
      const dept = document.getElementById('dept')?.value || 
                  document.getElementById('department')?.value;
      const semester = document.getElementById('sem')?.value || 
                      document.getElementById('semester')?.value;
      const year = document.getElementById('year')?.value;
      const subject = document.getElementById('subject')?.value?.trim();
      const file = document.getElementById('paperFile')?.files?.[0] || 
                  document.getElementById('file')?.files?.[0];

      if (!title || !dept || !semester || !year || !subject || !file) {
        alert('Please fill all fields and select a file');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('dept', dept);
      formData.append('semester', semester);
      formData.append('year', year);
      formData.append('subject', subject);
      formData.append('file', file);

      try {
        const response = await fetch(`${apiBase}/papers`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: formData
        });

        const result = await response.json();

        if (response.ok) {
          alert('✅ Paper uploaded successfully!');
          uploadForm.reset();
          
          // Close modal if exists
          const modal = document.getElementById('modal');
          if (modal) modal.classList.add('hidden');
          
          await loadPapers();
        } else {
          throw new Error(result.error || 'Upload failed');
        }

      } catch (error) {
        console.error('❌ Upload error:', error);
        alert('❌ Upload error: ' + error.message);
      }
    };
  }
});

// try side user
// Function to fetch & display list of admins with count
async function showUsersPanel() {
  try {
    const res = await fetch(`${apiBase}/admins`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Unable to fetch users');
    const users = await res.json();

    // Update count & list
    document.getElementById('userCount').textContent = users.length;

    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.username;
      userList.appendChild(li);
    });

    // Show the users panel (in case it's hidden)
    document.getElementById('usersPanel').style.display = 'block';

  } catch (err) {
    alert('Error loading users: ' + err.message);
  }
}

// Attach click event handler to Users link
document.getElementById('usersLink').addEventListener('click', function(e) {
  e.preventDefault();

  // Optionally hide other sections if needed here, e.g. hide papers section

  showUsersPanel();
});



// Modal controls
const modal = document.getElementById('modal');
const addPaperBtn = document.getElementById('addPaperBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

if (addPaperBtn && modal) {
  addPaperBtn.onclick = () => modal.classList.remove('hidden');
}

if (closeModalBtn && modal) {
  closeModalBtn.onclick = () => modal.classList.add('hidden');
}

// Admin management functions
async function loadAdmins() {
  try {
    const res = await fetch(`${apiBase}/admins`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to load admins');
    const admins = await res.json();
    renderAdminList(admins);
  } catch (error) {
    console.error('Error loading admins:', error);
  }
}

function renderAdminList(admins) {
  const list = document.getElementById('adminList');
  if (!list) return;

  list.innerHTML = '';
  admins.forEach(admin => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${admin.username}
      <button onclick="deleteAdmin('${admin._id}')">❌ Remove</button>
    `;
    list.appendChild(li);
  });
}

// Add admin
document.addEventListener('DOMContentLoaded', function() {
  const addAdminForm = document.getElementById('addAdminForm');
  if (addAdminForm) {
    addAdminForm.addEventListener('submit', async e => {
      e.preventDefault();

      const username = document.getElementById('newAdminUser').value.trim();
      const password = document.getElementById('newAdminPass').value.trim();

      if (!username || !password) {
        alert('Please enter username and password');
        return;
      }

      try {
        const res = await fetch(`${apiBase}/auth/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to add admin');

        alert('Admin added successfully');
        addAdminForm.reset();
        await loadAdmins();
      } catch (error) {
        alert('Add admin error: ' + error.message);
      }
    });
  }
});

// Delete admin
async function deleteAdmin(id) {
  if (!confirm('Delete this admin?')) return;

  try {
    const res = await fetch(`${apiBase}/admins/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete admin');
    await loadAdmins();
  } catch (error) {
    alert('Error deleting admin: ' + error.message);
  }
}

// Logout
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.onclick = function () {
      localStorage.removeItem('token');
      window.location.href = 'login.html';
    };
  }
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});
// Make functions global
window.approvePaper = approvePaper;
window.deletePaper = deletePaper;
window.deleteAdmin = deleteAdmin;
window.loadPapers = loadPapers;

