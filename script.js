// updated code 5sep line 2 to 213  *fully work my code 215 to 492*
// const apiBase = 'http://localhost:4000/api';

// // DOM elements
// const resultsDiv = document.getElementById('results');
// const searchForm = document.getElementById('searchForm');

// // Test server connection
// async function testServerConnection() {
//     try {
//         console.log('🔍 Testing server connection...');
//         const response = await fetch(`${apiBase}/test`);
//         if (response.ok) {
//             const data = await response.json();
//             console.log('✅ Server connection successful:', data.message);
//             return true;
//         }
//     } catch (error) {
//         console.error('❌ Server connection failed:', error);
//         showError('Cannot connect to server. Please ensure the server is running.');
//         return false;
//     }
// }

// // Show error message
// function showError(message) {
//     if (resultsDiv) {
//         resultsDiv.innerHTML = `<div style="color: red; padding: 20px; text-align: center;">❌ Error: ${message}</div>`;
//     }
// }

// // Show loading message
// function showLoading() {
//     if (resultsDiv) {
//         resultsDiv.innerHTML = '<div style="text-align: center; padding: 20px;">🔍 Searching...</div>';
//     }
// }

// // Search form event listener
// if (searchForm) {
//     searchForm.addEventListener('submit', async function(e) {
//         e.preventDefault();
        
//         console.log('🔍 Search form submitted');
//         showLoading();

//         // Get form values
//         const filters = {
//             dept: document.getElementById('department')?.value || '',
//             semester: document.getElementById('semester')?.value || '', 
//             year: document.getElementById('year')?.value || '',
//             subject: document.getElementById('subject')?.value?.trim() || ''
//         };

//         console.log('🔍 Search filters:', filters);

//         try {
//             // Build query string
//             const queryParams = new URLSearchParams();
//             if (filters.dept) queryParams.append('dept', filters.dept);
//             if (filters.semester) queryParams.append('semester', filters.semester);
//             if (filters.year) queryParams.append('year', filters.year);
//             if (filters.subject) queryParams.append('subject', filters.subject);

//             const queryString = queryParams.toString();
//             const url = `${apiBase}/papers/public${queryString ? '?' + queryString : ''}`;
            
//             console.log('🚀 Fetching from:', url);

//             const response = await fetch(url);
            
//             if (!response.ok) {
//                 throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//             }

//             const papers = await response.json();
//             console.log(`✅ Found ${papers.length} papers`);
            
//             renderResults(papers);

//         } catch (error) {
//             console.error('❌ Search error:', error);
//             showError('Search failed: ' + error.message);
//         }
//     });
// }

// // Render search results
// function renderResults(papers) {
//     if (!resultsDiv) {
//         console.error('❌ Results div not found');
//         return;
//     }

//     if (papers.length === 0) {
//         resultsDiv.innerHTML = `
//             <div style="text-align: center; padding: 40px; color: #666;">
//                 <h3>📋 No Papers Found</h3>
//                 <p>No question papers match your search criteria.</p>
//                 <p>Try adjusting your filters or search terms.</p>
//             </div>
//         `;
//         return;
//     }

//     let html = `
//         <div style="margin: 20px 0;">
//             <h3 style="color: #333;">📋 Found ${papers.length} Question Paper${papers.length > 1 ? 's' : ''}</h3>
//         </div>
//         <div style="display: grid; gap: 15px;">
//     `;

//     papers.forEach(paper => {
//         html += `
//             <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 10px;">
//                     <h4 style="margin: 0; color: #0066cc; font-size: 1.2em;">${paper.title}</h4>
//                     <span style="background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">✅ ${paper.status}</span>
//                 </div>
                
//                 <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 15px 0;">
//                     <div><strong>Department:</strong> ${paper.dept}</div>
//                     <div><strong>Semester:</strong> ${paper.semester}</div>
//                     <div><strong>Year:</strong> ${paper.year}</div>
//                     <div><strong>Subject:</strong> ${paper.subject}</div>
//                 </div>
                
//                 <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
//                     <small style="color: #666;">
//                         📅 Uploaded: ${new Date(paper.uploadedAt).toLocaleDateString()}
//                     </small>
//                     <button 
//                         onclick="downloadPaper('${paper._id}', '${paper.filename}')" 
//                         style="background: #007bff; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
//                         onmouseover="this.style.background='#0056b3'" 
//                         onmouseout="this.style.background='#007bff'">
//                         📄 Download PDF
//                     </button>
//                 </div>
//             </div>
//         `;
//     });

//     html += '</div>';
//     resultsDiv.innerHTML = html;
// }

// // Download paper function
// async function downloadPaper(paperId, filename) {
//     try {
//         console.log('📥 Downloading paper:', paperId);
        
//         const response = await fetch(`${apiBase}/papers/public/download/${paperId}`);
        
//         if (!response.ok) {
//             throw new Error('Download failed');
//         }

//         // Create blob and download
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = filename || 'question-paper.pdf';
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         window.URL.revokeObjectURL(url);
        
//         console.log('✅ Download successful');
        
//     } catch (error) {
//         console.error('❌ Download error:', error);
//         alert('❌ Download failed: ' + error.message);
//     }
// }

// // Load all approved papers on page load
// async function loadAllApprovedPapers() {
//     try {
//         console.log('📋 Loading all approved papers...');
//         showLoading();
        
//         const response = await fetch(`${apiBase}/papers/public`);
        
//         if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//         }
        
//         const papers = await response.json();
//         console.log(`✅ Loaded ${papers.length} approved papers`);
        
//         renderResults(papers);
        
//     } catch (error) {
//         console.error('❌ Error loading papers:', error);
//         showError('Failed to load papers: ' + error.message);
//     }
// }

// // Initialize page
// window.onload = async function() {
//     console.log('🚀 Student search page loaded');
    
//     const serverConnected = await testServerConnection();
//     if (serverConnected) {
//         // Load all approved papers by default
//         loadAllApprovedPapers();
//     }
// };

// // Make functions global for onclick handlers
// window.downloadPaper = downloadPaper;

const apiBase = "https://question-bank-backend-2.onrender.com/api";
//const apiBase = '/api';
//const apiBase = 'https://yourapp.onrender.com/api';

// DOM elements
const resultsDiv = document.getElementById('results');
const searchForm = document.getElementById('searchForm');

console.log('🚀 Student search interface loaded');

// Test server connection for students
async function testStudentConnection() {
    try {
        console.log('🔍 Testing student server connection...');
        
        // Test if we can access public papers
        const response = await fetch(`${apiBase}/papers/public`);
        
        if (response.ok) {
            const papers = await response.json();
            console.log('✅ Student API working! Found', papers.length, 'approved papers');
            return true;
        } else {
            throw new Error(`Server error: ${response.status}`);
        }
    } catch (error) {
        console.error('❌ Student connection failed:', error);
        showError('Cannot connect to server. Please ensure the server is running.');
        return false;
    }
}

// Show error message
function showError(message) {
    if (resultsDiv) {
        resultsDiv.innerHTML = `
            <div style="color: red; padding: 20px; text-align: center; background: #ffe6e6; border: 1px solid #ff9999; border-radius: 5px;">
                ❌ Error: ${message}
            </div>`;
    }
}

// Show loading message
function showLoading() {
    if (resultsDiv) {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #f0f8ff; border: 1px solid #0066cc; border-radius: 5px;">
                🔍 Searching for papers...
            </div>`;
    }
}

// Search form event listener
if (searchForm) {
    searchForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('🔍 Student search form submitted');
        showLoading();

        // Get form values
        const filters = {
            dept: document.getElementById('department')?.value || '',
            semester: document.getElementById('semester')?.value || '', 
            year: document.getElementById('year')?.value || '',
            subject: document.getElementById('subject')?.value?.trim() || ''
        };

        console.log('🔍 Search filters:', filters);
        searchApprovedPapers(filters);
    });
}

// Search approved papers function
async function searchApprovedPapers(filters = {}) {
    try {
        // Build query string for filters
        const queryParams = new URLSearchParams();
        if (filters.dept) queryParams.append('dept', filters.dept);
        if (filters.semester) queryParams.append('semester', filters.semester);
        if (filters.year) queryParams.append('year', filters.year);
        if (filters.subject) queryParams.append('subject', filters.subject);

        const queryString = queryParams.toString();
        const url = `${apiBase}/papers/public${queryString ? '?' + queryString : ''}`;
        
        console.log('🚀 Student fetching from:', url);

        const response = await fetch(url);
        
        console.log('📡 Student response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const papers = await response.json();
        console.log(`✅ Student found ${papers.length} approved papers:`, papers);
        
        renderStudentResults(papers);

    } catch (error) {
        console.error('❌ Student search error:', error);
        showError('Search failed: ' + error.message);
    }
}

// Render search results for students
function renderStudentResults(papers) {
    console.log('🎨 Rendering', papers.length, 'papers for students');
    
    if (!resultsDiv) {
        console.error('❌ Results div not found');
        return;
    }

    if (papers.length === 0) {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #666; background: #f9f9f9; border-radius: 8px;">
                <h3>📋 No Papers Found</h3>
                <p>No approved question papers match your search criteria.</p>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div style="margin: 20px 0;">
            <h3 style="color: #333;">📋 Found ${papers.length} Approved Question Paper${papers.length > 1 ? 's' : ''}</h3>
        </div>
        <div style="display: grid; gap: 15px;">
    `;

    papers.forEach(paper => {
        html += `
            <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                    <h4 style="margin: 0; color: #0066cc; font-size: 1.2em;">${paper.title}</h4>
                    <span style="background: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">
                        ✅ ${paper.status}
                    </span>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 15px 0;">
                    <div><strong>Department:</strong> ${paper.dept}</div>
                    <div><strong>Semester:</strong> ${paper.semester}</div>
                    <div><strong>Year:</strong> ${paper.year}</div>
                    <div><strong>Subject:</strong> ${paper.subject}</div>
                </div>
                
                <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <small style="color: #666;">
                        📅 Uploaded: ${new Date(paper.uploadedAt).toLocaleDateString()}
                    </small>

                    <button 
                     onclick="viewStudentPaper('${paper._id}', '${paper.filename}')"
                     style="background: #17a2b8; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; margin-right: 8px;"
                     onmouseover="this.style.background='#117a8b'" 
                     onmouseout="this.style.background='#17a2b8'">
                     👀 View PDF
                   </button>
                    <button 
                        onclick="downloadStudentPaper('${paper._id}', '${paper.filename}')" 
                        style="background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
                        onmouseover="this.style.background='#0056b3'" 
                        onmouseout="this.style.background='#007bff'">
                        📄 Download PDF
                    </button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    resultsDiv.innerHTML = html;
    
    console.log('✅ Student results rendered successfully');
}

// View paper function for students
async function viewStudentPaper(paperId, filename) {
    try {
        console.log('👀 Student viewing paper:', paperId);

        const response = await fetch(`${apiBase}/papers/public/download/${paperId}`);

        console.log('📡 View response status:', response.status);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'View failed');
        }

        // Create blob and open in new tab
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank'); // Open PDF in new tab
        console.log('✅ Student view successful');
        
    } catch (error) {
        console.error('❌ Student view error:', error);
        alert('❌ View failed: ' + error.message);
    }
}


// Download paper function for students
async function downloadStudentPaper(paperId, filename) {
    try {
        console.log('📥 Student downloading paper:', paperId);
        
        const response = await fetch(`${apiBase}/papers/public/download/${paperId}`);
        
        console.log('📡 Download response status:', response.status);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Download failed');
        }

        // Create blob and download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'question-paper.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        console.log('✅ Student download successful');
        
    } catch (error) {
        console.error('❌ Student download error:', error);
        alert('❌ Download failed: ' + error.message);
    }
}

// Load all approved papers on page load for students
async function loadAllApprovedPapersForStudents() {
    try {
        console.log('📋 Loading all approved papers for students...');
        showLoading();
        
        const response = await fetch(`${apiBase}/papers/public`);
        
        console.log('📡 Load all response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const papers = await response.json();
        console.log(`✅ Loaded ${papers.length} approved papers for students`);
        
        renderStudentResults(papers);
        
    } catch (error) {
        console.error('❌ Error loading papers for students:', error);
        showError('Failed to load papers: ' + error.message);
    }
}

// Initialize student page
window.onload = async function() {
    console.log('🚀 Student search page initializing...');
    
    const connected = await testStudentConnection();
    if (connected) {
        // Load all approved papers by default
        loadAllApprovedPapersForStudents();
    }
};

// Make functions global for onclick handlers
window.downloadStudentPaper = downloadStudentPaper;
window.searchApprovedPapers = searchApprovedPapers;








